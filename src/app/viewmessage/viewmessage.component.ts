import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-viewmessage',
  templateUrl: './viewmessage.component.html',
  styleUrls: ['./viewmessage.component.css']
})
export class ViewmessageComponent implements OnInit {
  AllMessages:any;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.getMessages().subscribe(res=>{
      this.AllMessages=res;
      console.log(res);
    })
  }

}
