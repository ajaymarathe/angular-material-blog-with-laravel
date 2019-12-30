import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor(private route: ActivatedRoute, private post_service: PostService) { }

  responseData;
  post;

  loading: boolean = false;

  ngOnInit() {
    this.show();
  }

  show() {
    this.loading = true;

    const slug = this.route.snapshot.params.id;
    console.log(slug);

    this.post_service.OnePost(slug)
      .subscribe(
        (response: Response) => {
          // this.responseData = response;
          console.log('response', response)
          this.post = response;
          this.loading = false;
        },
        (error) => console.log(error)
      );
  }

}
