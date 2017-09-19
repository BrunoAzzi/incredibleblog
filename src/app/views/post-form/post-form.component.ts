import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  post: Post = new Post();

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
  }

  savePost() {
    this.post.path = encodeURI(this.post.title.replace(/\s/g, "-"));
    this.post.date = new Date().toISOString();
    this.postService.savePost(this.post);
  }

}
