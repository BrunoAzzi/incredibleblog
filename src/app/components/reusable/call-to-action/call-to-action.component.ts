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

  constructor(
    private ipService: IpService,
    private leadService: LeadService
  ) { }

  ngOnInit() {
  }

  saveLead(name, email) {
    this.ipService.getIp().subscribe(response => this.ip = response.query);
    let lead = new Lead();
    lead.email = email;
    // lead.name = name;
    // lead.ip = ip;

    this.leadService.saveLead(lead);
  }

}
