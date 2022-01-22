import { Injectable } from '@nestjs/common';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article, ArticleDocument } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
  ) {}

  create(createArticleInput: CreateArticleInput) {
    const newArticle = new this.articleModel(createArticleInput);
    return newArticle.save();
  }

  findAll() {
    return `This action returns all articles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(payload: UpdateArticleInput) {
    return this.articleModel
      .findByIdAndUpdate(payload.id, payload, { new: true })
      .exec();
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
