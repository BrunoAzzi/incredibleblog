import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from "../../../model/post";
import { PostService } from '../../../services/post.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-post-layout',
  templateUrl: './post-layout.component.html',
  styleUrls: ['./post-layout.component.scss']
})
export class PostLayoutComponent implements OnInit {

  post: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.post = this.postService.getPost(params['post-title']);
    });
  }
}
