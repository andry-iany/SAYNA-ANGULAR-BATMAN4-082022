import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TArticle } from '../types';

const api = 'http://localhost:5678/articles/';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllArticles(limit = 0) {
    let endpoint = limit > 0 ? `${api}?_limit=${limit}` : api;
    return this.http.get<TArticle[]>(endpoint);
  }

  getArticleById(id: TArticle['id']) {
    return this.http.get<TArticle>(api + id);
  }
}
