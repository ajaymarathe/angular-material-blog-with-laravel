import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  postData;
  posts;
  loading :boolean = false;
  ngOnInit() {
    this.GetPost();
  }

  GetPost(){
    this.loading = true;
    this.postService.Post()
      .subscribe(
        (response: Response) => {
          this.postData = response;
          this.loading = false;
          console.log(response)
          // this.posts = Object.keys(this.postData.data).map((keys) => this.postData.data[keys]);
          this.posts = this.postData.data

          // console.log(this.posts);
        },
        (error) => console.log(error)
      );
  }

  getNext(event){
    const nextPage = event.pageIndex + 1;
    this.loading = true;
    this.postService.GetNextPage(nextPage)
    .subscribe(
      (response: Response) => {
        this.postData = response;
        console.log(response)
        this.posts = this.postData.data;
        this.loading = false;
      },
      (error) => console.log(error)
    );
  }

}
