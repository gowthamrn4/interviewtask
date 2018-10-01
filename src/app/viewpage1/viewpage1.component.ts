import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router} from '@angular/router';
import { DataService } from '../data.service';
import {Http} from '@angular/http';


@Component({
  selector: 'app-viewpage1',
  templateUrl: './viewpage1.component.html',
  styleUrls: ['./viewpage1.component.css']
})
export class Viewpage1Component implements OnInit {

  id:any;
  myData={
    _id:'',
     firstName:'',
     lastName:'',
     mobileNumber:'',
     email:'',
     uid:''
};
deleteContact={
  uid:''
}
allUsers:any;
  constructor(private route:ActivatedRoute,private router:Router,private dataservice:DataService,private http:Http) { }

  ngOnInit() {
    this.allUsers=[];
    this.id=this.route.snapshot.params['_id'];
    this.dataservice.getContact().subscribe(res => {
    this.allUsers=res;
    console.log(this.allUsers);
    for(let i=0;i<this.allUsers.length;i++){
      if(this.id===this.allUsers[i]._id){
        this.myData._id=this.allUsers[i]._id;
       
     
        this.myData.uid=this.allUsers[i].uid;
        this.myData.firstName=this.allUsers[i].firstName;
        this.myData.lastName=this.allUsers[i].lastName;
        this.myData.mobileNumber=this.allUsers[i].mobileNumber;
        this.myData.email=this.allUsers[i].email;
        this.deleteContact.uid=this.allUsers[i].uid;


      }

    }      console.log("test"+this.myData);
    })
  }
 Delete(){
  this.dataservice.DelContact(this.deleteContact).subscribe(res=>{
    console.log(res);
    alert("Delete successfull");
    this.router.navigate(['landingpage/contact'])

  
  })
 }
 update()
 {
   this.dataservice.UpdateContact(this.myData).subscribe(res=>{
     console.log(res);
     alert("Updated successfully");
     this.router.navigate(['landingpage/contact'])
   })
 }

}
