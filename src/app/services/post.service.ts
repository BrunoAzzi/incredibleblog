import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Post } from '../model/post';

@Injectable()
export class PostService {

  private postList: FirebaseListObservable<Post[]>;

  constructor(db: AngularFireDatabase) {
    this.postList = db.list('/postList');
  }

  getPostList(): FirebaseListObservable<Post[]> {
    return this.postList;
  }

  savePost(post: Post) {
    return this.postList.push(post);
  }

  removePost(post) {
    return this.postList.remove(post);
  }

  updatePost(post) {
    return this.postList.update(post.$key, post);
  }

  getPost(path: string) {
    return this.postList.map( postList => postList.find( post => post.path === path));
  }

}
