import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Post } from '../../model/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  postList: FirebaseListObservable<Post[]>;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postList = this.postService.getPostList();
  }

}
