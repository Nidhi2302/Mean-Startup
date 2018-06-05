import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ApiCallCompComponent } from './components/api-call-comp/api-call-comp.component';
import { AppHttpService } from './services/app-http/app-http.service';
import { ApiCallService } from './services/api-call/api-call.service';

@NgModule({
  declarations: [
    AppComponent,
    ApiCallCompComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [AppHttpService,ApiCallService],
  bootstrap: [AppComponent,ApiCallCompComponent]
})
export class AppModule { }
