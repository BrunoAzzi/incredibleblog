export interface ILead {
  email: string;
}

export class Lead implements ILead {
  email: string;

  constructor()
  constructor(data?: any) {
    this.email = data && data.email || "";
  }

}
