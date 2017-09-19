import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IpService {

  constructor(
    private _jsonp: Jsonp
  ) { }

  getIp() {
    return this._jsonp.get('https://api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK').map(data => data.json());
  }

}
