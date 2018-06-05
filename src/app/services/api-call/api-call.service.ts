import { Injectable } from '@angular/core';
import { AppHttpService } from '../app-http/app-http.service';
import { Http,Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(public appHttp : AppHttpService) { }

  createAddress(params:{}){
    return new Promise((resolve,reject)=>{
      this.appHttp.post('addresses',params).subscribe(res=>{
        resolve(res);
      },err=>{
        reject(err);
      });
    })
   
}


}
