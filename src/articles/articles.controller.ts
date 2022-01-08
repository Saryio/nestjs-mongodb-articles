import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { ArticlesModule } from './articles.module';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

type findAllDataType = {
  page: number
  limit: number
}

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiCreatedResponse({description: "Create new article"})
  @ApiBody({type: CreateArticleDto})
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  @ApiCreatedResponse({description: "Get articles with pagination"})
  findAll(@Query() { page, limit }: findAllDataType) {
    return this.articlesService.findAll(+page || undefined, +limit || undefined);
  }

  @Get(':id')
  @ApiCreatedResponse({description: "Get article by ID"})
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @Put(':id')
  @ApiCreatedResponse({description: "Update an article"})
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({description: "Delete an article"})
  remove(@Param('id') id: string) {
    return this.articlesService.remove(id);
  }
}
