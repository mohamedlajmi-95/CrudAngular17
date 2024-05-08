import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Categorie } from '../classes/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
private url="http://localhost:3001/api/categories"
http=inject(HttpClient)
categories=signal<Categorie[]>([])
  constructor() {}
  getarticle() {
    this.http.get<Categorie[]>(this.url).subscribe(data=>{
      this.categories.set(data)
    })
    return this.categories;
  }
}
