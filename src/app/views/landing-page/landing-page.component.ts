import { Component, OnInit } from '@angular/core';
import { LeadFormComponent } from '../../components/dialogs/lead-form/lead-form.component';
import { MdDialog, MdSnackBar } from '@angular/material';
import { FirebaseListObservable } from "angularfire2/database";
import { LeadService } from '../../services/lead.service';
import { Lead } from '../../model/lead';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  leadList: Lead[];

  constructor(
    private dialog: MdDialog,
    private leadService: LeadService,
    private snackbar: MdSnackBar
  ) { }

  ngOnInit() {
    this.leadService.getLeadList().subscribe(leadList => {
      console.log(leadList);
      this.leadList = leadList;
    });
  }

  openLeadForm() {
    let dialogRef = this.dialog.open(LeadFormComponent);

    dialogRef.afterClosed().subscribe(message => {
      this.snackbar.open( message, 'Ok', { duration: 8000 } )
    });
  }

}
