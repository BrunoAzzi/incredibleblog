import { Injectable } from '@angular/core';
import { Http   } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IpService {

  constructor(
    private http: Http
  ) { }

  getIp() {
    return this.http.get("http://ip-api.com/json").map(res => res.json());
  }

}
