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
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.viewCalllog().subscribe(res=>{
      this.BindContact=res;
      console.log(res)
      for(var i=0;i<this.BindContact.length;i++){
        console.log(res);
  }
    })
}

}
