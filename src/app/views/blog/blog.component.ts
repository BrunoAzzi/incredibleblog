import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  postList = [
    {
      imageUrl: "http://via.placeholder.com/160x165",
      url: "compra-midia",
      title: "Planejamento de compra de mídia: 5 dicas para quem quer começar + planilha gratuita",
      author: "Mônica Custódio",
      date: "2017/12/12",
      description: "Conheça os primeiros passos para iniciar o investimento em mídia paga e baixe uma planilha gratuita para monitorar seus resultados"
    },
    {
      imageUrl: "http://via.placeholder.com/160x165",
      title: "Planejamento de compra de mídia: 5 dicas para quem quer começar + planilha gratuita",
      author: "Mônica Custódio",
      url: "compra-midia",
      date: "2017/12/12",
      description: "Conheça os primeiros passos para iniciar o investimento em mídia paga e baixe uma planilha gratuita para monitorar seus resultados"
    },
    {
      imageUrl: "http://via.placeholder.com/160x165",
      title: "Planejamento de compra de mídia: 5 dicas para quem quer começar + planilha gratuita",
      author: "Mônica Custódio",
      url: "compra-midia",
      date: "2017/12/12",
      description: "Conheça os primeiros passos para iniciar o investimento em mídia paga e baixe uma planilha gratuita para monitorar seus resultados"
    },
    {
      imageUrl: "http://via.placeholder.com/160x165",
      title: "Planejamento de compra de mídia: 5 dicas para quem quer começar + planilha gratuita",
      author: "Mônica Custódio",
      url: "compra-midia",
      date: "2017/12/12",
      description: "Conheça os primeiros passos para iniciar o investimento em mídia paga e baixe uma planilha gratuita para monitorar seus resultados"
    }
  ];

  pageSize = 5;

  constructor() { }

  ngOnInit() {
  }

}
