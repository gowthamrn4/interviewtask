import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service'
import { FormsModule } from '@angular/forms';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Route, Router} from '@angular/router';


@Component({
  selector: 'app-addnewcontact',
  templateUrl: './addnewcontact.component.html',
  styleUrls: ['./addnewcontact.component.css']
})
export class AddnewcontactComponent implements OnInit {

 contact:any={
 }
  constructor(private dataservice:DataService,private http:Http,private router:Router) { }

  ngOnInit() {
  }
  onSubmitnews(value){
    console.log(this.contact);
    this.dataservice.addContact(this.contact).subscribe(res=>{
      console.log(res);
      alert("Add successfull");
      this.router.navigate(['landingpage/contact'])

    })
  }

}
