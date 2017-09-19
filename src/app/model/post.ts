export interface IPost {
  title: string;
  description: string;
  author: string;
  date: string;
  imageUrl: string;
  path: string;
  markdownUrl: string;
}

export class Post implements IPost {
  title: string;
  description: string;
  author: string;
  date: string;
  imageUrl: string;
  path: string;
  markdownUrl: string;

  constructor()
  constructor(data?: any) {
    this.imageUrl = data && data.imageUrl || "";
    this.title = data && data.title || "";
    this.author = data && data.author || "";
    this.date = data && data.date || "";
    this.description = data && data.description || "";
    this.path = data && data.path || "";
    this.markdownUrl = data && data.markdownUrl || "";
  }

}
