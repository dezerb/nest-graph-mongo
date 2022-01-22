import { Article } from './article';

export interface User {
  _id: string;
  name?: string;
  lastName?: string;
  age?: number;
  articles: Article[];
}
