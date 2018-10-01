import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service'
import { FormsModule } from '@angular/forms';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  BindContact:any;
  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit() {
    this.dataservice.getContact().subscribe(res=>{
      this.BindContact=res;
      console.log(res);
      for(var i=0;i<this.BindContact.length;i++){
        
  }
    })
}
calllog(value)
{
  let data={
    uid:value.uid,
    firstName:value.firstName,
    lastName:value.lastName,
    email:value.email,
    mobileNumber:value.mobileNumber,
    typeOfCall:"dialled",
    dateTime:new Date
  }
  alert("Your Call Created Successfully");
  this.dataservice.createCalllog(data).subscribe(res=>
    {
      console.log(res);
      this.router.navigate(['landingpage/phone'])


    })
}
message(value)
{
  let data={
    uid:value.uid,
    firstName:value.firstName,
    lastName:value.lastName,
    email:value.email,
    message:"Message",
    dateTime:new Date().toLocaleTimeString()
  }
  alert("Your Call Created Successfully");
  this.dataservice.createMessage(data).subscribe(res=>
    {
      console.log(res);
      this.router.navigate(['landingpage/phone'])


    })
}
}
