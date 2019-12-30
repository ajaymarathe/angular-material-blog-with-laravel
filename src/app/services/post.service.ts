import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // url = 'http://blog.bootcatch.com/api/posts';
  url = 'http://localhost:8000/api/posts';

  constructor(private http: HttpClient) { }

  Post() {
    return this.http.get(this.url);
  }

  OnePost(slug) {
    return this.http.get(this.url + '/' + slug);
  }

  GetNextPage(nextPage) {
    return this.http.get(this.url + '?page=' + nextPage);
  }
}
``