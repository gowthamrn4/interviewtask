import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service'
import { FormsModule } from '@angular/forms';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  BindContact:any;
  DelLog={
    _id:''
  }
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.CallLogs()

}
delCallLog(value){
 let data={
   _id:value._id,
 }
 this.dataservice.DelCall(data).subscribe(res=>
  {
   
     this.CallLogs();
     alert("confirm delete?");
  })
  console.log(data)
}
CallLogs(){
    this.dataservice.viewCalllog().subscribe(res=>{
    this.BindContact=res;
    console.log(res)
    for(var i=0;i<this.BindContact.length;i++){
      console.log(res);
}
  })
}
}
