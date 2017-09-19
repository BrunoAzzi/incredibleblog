import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  postList = [
    {
      imageUrl: "/assets/post1.png",
      url: "10-dicas-de-redes-sociais-para-sua-empresa",
      title: "10 Dicas de Redes Sociais para a sua empresa.",
      author: "Carolina Silva",
      date: "18/09/2017",
      description: "Se você deseja promover a sua empresa gastando pouco e utilizando recursos simples, as redes sociais podem ser uma solução pra você. Selecionamos dez dicas infalíveis de marketing em redes sociais."
    }
  ];

  pageSize = 5;

  constructor() { }

  ngOnInit() {
  }

}
