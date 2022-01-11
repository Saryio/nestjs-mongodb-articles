import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, ArticleDocument } from './entities/article.entity';
import { ExternalRequestService } from './external-request/external-request.service';

interface ArticleDataType {
  id?: number
  featured?: boolean
  title?: string
  url?: string
  imageUrl?: string
  newsSite?: string
  summary?: string
  publishedAt?: string
  launches?: [
    {
      id?: string
      provider?: string
    }
  ]
  events?: [
    {
      id?: string
      provider?: string
    }
  ]
}

@Injectable()
export class ArticlesService {

  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
    private externalRequest: ExternalRequestService
  ){}

  create(createArticleDto: CreateArticleDto) {
    const article = new this.articleModel(createArticleDto)
    return article.save()
  }

  async findAll(page: number = 1, limit = 10) {
    if (page < 1) page = 1
    return this.articleModel.find().limit(limit).skip((page-1)*limit).sort( { id: -1 })
  }

  findOne(id: string) {
    return this.articleModel.findById(id)
  }

  update(id: string, updateArticleDto: UpdateArticleDto) {
    return this.articleModel.findByIdAndUpdate( {_id: id}, {$set: updateArticleDto}, {new: true})
  }

  remove(id: string) {
    return this.articleModel.deleteOne({_id: id}).exec();
  }

  @Cron('0 0 9 * * *') //Every 09:00 AM
  async saveNewArticles() {
    console.log("salvando novos artigos")
    const numArticles: number = await this.articleModel.find().count()
    const lastArticle: ArticleDataType[] = await this.articleModel.find().limit(1).sort({ id: -1 })
    const articles = await this.externalRequest.getArticles({
      numArticles: numArticles,
      lastArticle: lastArticle[0].id
    })
    articles.forEach(async (article: CreateArticleDto) => {
      await this.create(article)
    })
  }

  async saveAllArticles(){
    const articles = await this.externalRequest.getAllArticles()

    articles.forEach(async (article) => {
      await this.create(article)
    });
  }
}
