import { Component, OnInit } from '@angular/core';
import { IpService } from '../../../services/ip.service';
import { LeadService } from '../../../services/lead.service';
import { MdSnackBar } from '@angular/material';
import { Lead } from '../../../model/lead';

@Component({
  selector: 'app-ebook-download',
  templateUrl: './ebook-download.component.html',
  styleUrls: ['./ebook-download.component.scss']
})
export class EbookDownloadComponent implements OnInit {

  lead: Lead = new Lead();

  companyTypeList = [
    { label: "Comércio em geral", value: "B2C" },
    { label: "Outras empresas", value: "B2B" },
    { label: "Não represento uma empresa", value: "" }
  ];

  constructor(
    private ipService: IpService,
    private leadService: LeadService,
    private snackbar: MdSnackBar,
  ) { }

  ngOnInit() {
  }

  saveLead(form) {
    if (!form.form.valid) {
      this.snackbar.open("Corrija os erros no formulário para cadastrar", "Ok", { duration: 5000 });
    } else {
      this.ipService.getIp().subscribe(response => {
        this.lead.ip = response.ip;
        this.leadService.saveLead(this.lead).then(
          success => {
            this.snackbar.open("Parabéns, você foi incluido com sucesso na nossa lista.", "Ok", { duration: 5000 });
            form.form.reset();
          },
          error => this.snackbar.open(error.message, "Ok", { duration: 5000 })
        );
      });
    }

  }

}
