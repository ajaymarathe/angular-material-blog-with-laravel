import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  // url = 'http://blog.bootcatch.com/api/category';
  url = 'http://localhost:8000/api/category';

  category() {
    return this.http.get(this.url);
  }
}
