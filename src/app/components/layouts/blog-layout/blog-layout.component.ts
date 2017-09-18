import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-layout',
  templateUrl: './blog-layout.component.html',
  styleUrls: ['./blog-layout.component.scss']
})
export class BlogLayoutComponent implements OnInit {

  lead = {
    name: "",
    lastname: "",
    email: "",
    type: ""
  };

  companyTypeList = [
    { label: "Comércio em geral", value: "B2C" },
    { label: "Outras empresas", value: "B2B" },
    { label: "Não represento uma empresa", value: "" }
  ]

  constructor() { }

  ngOnInit() {
  }

  saveLead() {
    console.log(this.lead);
  }

}
