import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private categoryService: CategoryService, private postService: PostService) { }

  responseData;
  categoryData;

  title;
  category;
  description;

  ngOnInit() {
    this.GetCategory();
  }

  GetCategory() {
    this.categoryService.category()
      .subscribe(
        (response: Response) => { //get response
          console.log(response);
          this.responseData = response;
          this.categoryData = this.responseData.data;
        },
        (error) => console.log(error)
      );
  }


  selectedFile: File;

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log('image', this.selectedFile);
  }

  Submit() {
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    uploadData.append('title', this.title);
    uploadData.append('description', this.description);

    console.log(uploadData);

    this.postService.CreatePost(uploadData)
      .subscribe(
        (response: Response) => {
          console.log(response);
          // this.router.navigate(['/']);
        },
        (error) => console.log(error)
      );
  }

}
