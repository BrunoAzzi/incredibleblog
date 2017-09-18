import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Lead } from '../model/lead';

@Injectable()
export class LeadService {

  private leadList: FirebaseListObservable<Lead[]>;

  constructor(db: AngularFireDatabase) {
    this.leadList = db.list('/leadList');
  }

  getLeadList(): FirebaseListObservable<Lead[]> {
    return this.leadList;
  }

  saveLead(lead: Lead) {
    return this.leadList.push(lead);
  }

  removeLead(lead) {
    return this.leadList.remove(lead);
  }

  update(lead) {
    return this.leadList.update(lead.$key, lead);
  }

}
