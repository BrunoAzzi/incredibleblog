import { Component, OnInit } from '@angular/core';
import { IpService } from '../../../services/ip.service';
import { LeadService } from '../../../services/lead.service';
import { Lead } from '../../../model/lead';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {

  ip: string = '';
  companyTypeList = [
    { label: "Comércio em geral", value: "B2C" },
    { label: "Outras empresas", value: "B2B" },
    { label: "Não represento uma empresa", value: "" }
  ];

  lead = {
    name: "",
    lastname: "",
    email: "",
    type: "",
    ip: ""
  };

  constructor(
    private ipService: IpService,
    private leadService: LeadService
  ) { }

  ngOnInit() {
  }

  saveLead() {
    this.ipService.getIp().subscribe(response => {
      this.lead.ip = response.query;
      this.leadService.saveLead(this.lead);
    });
  }

}
