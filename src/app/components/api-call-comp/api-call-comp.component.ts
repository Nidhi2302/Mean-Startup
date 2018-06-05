import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call/api-call.service';

@Component({
  selector: 'app-api-call-comp',
  templateUrl: './api-call-comp.component.html',
  styleUrls: ['./api-call-comp.component.css']
})
export class ApiCallCompComponent implements OnInit {

  constructor(private apiCallService:ApiCallService) { }

  ngOnInit() {
  }

  createAddress(){
    let params={
      "address_name":"",
      "address_line_1":"",
      "address_line_2":"",
      "address_city":"",
      "address_state":"",
      "address_country":"",
      "address_zip":"",
      "address_phone_number":"",
      "metadata": {}
    }
    this.apiCallService.createAddress(params).then(res=>{
      console.log("Request serve successfully and response is ",res);
    }).catch(err=>{
      console.log("Error to creating address and error is",err)
    })
  }
}
