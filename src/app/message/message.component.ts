import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  AllMessages:any;
  AllMessageslength:any;
  constructor( private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.getMessages().subscribe(res=>{
      this.AllMessages=res;
      for(let i=0;i<this.AllMessages.length;i++)
      {
        for(let k=0;k<this.AllMessages[i].message.length;k++)
        {
          this.AllMessageslength=this.AllMessages[i].message;
        } console.log(this.AllMessageslength);
      }
    })
  }
  

}
