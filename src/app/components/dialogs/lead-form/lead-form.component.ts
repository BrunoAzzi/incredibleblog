import { Component, OnInit } from '@angular/core';
import { Lead } from '../../../model/lead';
import { LeadService } from '../../../services/lead.service';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.scss']
})
export class LeadFormComponent implements OnInit {

  lead: Lead = new Lead();

  stringLead: string;

  constructor(
    private dialogRef: MdDialogRef<LeadFormComponent>,
    private leadService: LeadService
  ) {
  }

  ngOnInit() {
  }

  saveLead(value) {
    this.lead.email = value;
    this.leadService.saveLead(this.lead).then(
      success => this.dialogRef.close('Seu email foi cadastradoc om sucesso!'),
      error => this.dialogRef.close(error.message)
    );
  }

}
