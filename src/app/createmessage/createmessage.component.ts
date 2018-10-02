import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router} from '@angular/router';
import { DataService } from '../data.service';
import {Http} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-createmessage',
  templateUrl: './createmessage.component.html',
  styleUrls: ['./createmessage.component.css']
})
export class CreatemessageComponent implements OnInit {
  id:any;
  CreateMessage={
    _id:'',
     firstName:'',
     lastName:'',
     mobileNumber:'',
     email:'',
     uid:'',
     dateTime:new Date,
     
   
};
BindMessage={
      _id:'',
      firstName:'',
      lastName:'',
      mobileNumber:'',
      uid:'',
      Messages:[]

}
AllMessages:any;
allUsers:any;
CurrentUsersMessage:any;


  constructor(private route:ActivatedRoute,private router:Router,private dataservice:DataService,private http:Http) { }

  ngOnInit() { 
    this.ListMessage()
  }



  onSubmit(value)
  {
    let data={
      _id:this.BindMessage._id,
     message:{
        value:value.message,
        dateTime:new Date()
      }
    }
    console.log(data)
    this.dataservice.createMessageData(data).subscribe(res=>
      {
        this.ListMessage();
        console.log(res);
        alert("Your Message Is Created")  
      })
  }
  ListMessage()
  {
    this.CurrentUsersMessage=[]
    this.allUsers=[];
    this.id=this.route.snapshot.params['_id'];
    this.dataservice.getContact().subscribe(res => {
    this.allUsers=res;
    console.log(this.allUsers);
    for(let i=0;i<this.allUsers.length;i++){
      for(let k=0;k<this.allUsers[i].message.length;k++)
        {
          // this.MyData=this.allUsers[i].message;
        }// }console.log(this.MyData);

      if(this.id===this.allUsers[i]._id){
        this.BindMessage._id=this.allUsers[i]._id;
        this.BindMessage.firstName=this.allUsers[i].firstName;
        this.BindMessage.lastName=this.allUsers[i].lastName;
        this.BindMessage.mobileNumber=this.allUsers[i].mobileNumber;
        this.BindMessage.uid=this.allUsers[i].uid; 
        this.BindMessage.Messages=this.allUsers[i].message;
        this.CurrentUsersMessage=this.BindMessage.Messages;
      }
        

    }    console.log(this.CurrentUsersMessage);
    });


  }
}
