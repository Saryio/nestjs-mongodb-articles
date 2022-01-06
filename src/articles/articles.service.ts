import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, ArticleDocument } from './entities/article.entity';
import { ExternalRequestService } from './external-request/external-request.service';



@Injectable()
export class ArticlesService {

  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>, 
    private externalRequest: ExternalRequestService
    ) { }

  create(createArticleDto: CreateArticleDto) {
    const article = new this.articleModel(createArticleDto)
    return article.save()
  }

  async findAll() {
    //await this.createWithExternalData()
    return this.articleModel.find()
  }

  findOne(id: string) {
    return this.articleModel.findById(id)
  }

  update(id: string, updateArticleDto: UpdateArticleDto) {
    return this.articleModel.findByIdAndUpdate({
      _id: id
    },
      {
        $set: updateArticleDto
      },
      {
        new: true
      })
  }

  async createWithExternalData(){
    const articles = await this.externalRequest.getSpaceFlightArticles()
    articles.forEach(async (article: CreateArticleDto) =>{
      await this.create(article)
    })
  }

  remove(id: string) {
    return this.articleModel.deleteOne({
      _id: id
    }).exec();
  }

  
}
