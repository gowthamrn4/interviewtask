import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ContactComponent } from './contact/contact.component';
import {PhoneComponent} from './phone/phone.component';
import {MessageComponent } from './message/message.component';
import { CallComponent } from './phone/call/call.component';
import { DataService } from './data.service';
import { Viewpage1Component } from './viewpage1/viewpage1.component';
import { AddnewcontactComponent } from './addnewcontact/addnewcontact.component';
import { CreatemessageComponent } from './createmessage/createmessage.component';
import { ViewmessageComponent } from './viewmessage/viewmessage.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    ContactComponent,
    MessageComponent,
    PhoneComponent,
    CallComponent,
    Viewpage1Component,
    AddnewcontactComponent,
    CreatemessageComponent,
    ViewmessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path:'',pathMatch:'full',redirectTo:'landingpage' },
      { path:'landingpage',component:LandingpageComponent,
          children:[
                    {path:'',pathMatch:'full',redirectTo:'contact'},
                    {path:'contact',component:ContactComponent},
                    {path:'addnew',component:AddnewcontactComponent},
                    {path:'viewpage1/:_id',component:Viewpage1Component},
                    {path:'createmessage/:_id',component:CreatemessageComponent},
                    {path:'phone',component:PhoneComponent,
                  children:[
                    {path:'',pathMatch:'full',redirectTo:'call'},
                    {path:'',component:CallComponent}
                  ]},
                    {path:'message',component:MessageComponent,
                  children:[
                    { path:'',pathMatch:'full',redirectTo:'sendmessage' },
                  ]}
                  ]},
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

