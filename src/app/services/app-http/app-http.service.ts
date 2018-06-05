import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';
import { config } from '../../../config/app';


@Injectable({
  providedIn: 'root'
})
export class AppHttpService {
  private hostUrl = environment.API_URL;

  constructor(public http: Http) { }


  post(url, params: any = {}, headerOptions: any = {}, doNotSendAuthorizationParam: boolean = false) {
    let options = this.getHeader(headerOptions, {}, doNotSendAuthorizationParam);
    return this.http.post(this.hostUrl + url, params, options);
  }

  getHeader(headerOptions, params = {}, doNotSendAuthorizationParam) {
    let access_key = environment.ACCESS_KEY;
    let salt = environment.SALT;
    let timestamp = Math.floor(new Date().getTime() / 1000);
    let secret_key = environment.SECRECT_KEY;
    let signature = config.getSignature(salt + timestamp + access_key + secret_key + JSON.stringify(params));
    let headerParams = {
      access_key: access_key,
      salt: salt,
      signature: signature,
      'Content-Type': 'application/json'
    };

    if (headerOptions) {
      Object.assign(headerParams, headerOptions);
    }

    let headers = new Headers(headerParams);
    let req = new RequestOptions({ headers: headers });
    return req;
  }


}
