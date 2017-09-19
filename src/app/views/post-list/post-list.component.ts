import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Post } from '../../model/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList: FirebaseListObservable<Post[]>;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postList = this.postService.getPostList();
  }

  editPost(post) {

  }

}
