export interface ILead {
  name: string;
  lastname: string;
  email: string;
  type: string;
}

export class Lead implements ILead {
  name: string;
  lastname: string;
  email: string;
  type: string;

  constructor()
  constructor(data?: any) {
    this.name = data && data.name || "";
    this.lastname = data && data.lastname || "";
    this.email = data && data.email || "";
    this.type = data && data.type || "";
  }

}
