import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { whenRendered } from '@angular/core/src/render3';
import { checkAndUpdateQuery } from '@angular/core/src/view/query';
import { Headers } from '@angular/http';


@Injectable({
    providedIn: 'root'
  })
  export class DataService {
  PostContact:any;
  GetContact1:any;
  DeleteCon:any;
  UpdateCon:any;
  createLog:any;
  getCalls:any;
  createMessage1:any;
      
  constructor( private http:Http,private router:Router) { }
  ngOnInit()
  {
    
  }
  addContact(value){
    return this.http.post('https://interviewtask.herokuapp.com/contact/createContact',value)
    .pipe(map(data=>this.PostContact=data.json()))
   
  }
  getContact(){
    return this.http.get('https://interviewtask.herokuapp.com/contact/getContacts')
    .pipe(map(data=>this.GetContact1=data.json()))
  }
  viewCalllog(){
    return this.http.get('https://interviewtask.herokuapp.com/callLog/getCalls')
    .pipe(map(data=>this.getCalls=data.json()))
  }
  DelContact(value)
  {
    return this.http.post('https://interviewtask.herokuapp.com/contact/deleteContact',value)
    .pipe(map(data=>this.DeleteCon=data.json()))
  }
  UpdateContact(value)
  {

    return this.http.post('https://interviewtask.herokuapp.com/contact/editContact',value)
    .pipe(map(data=>this.UpdateCon=data.json()))
  }
  createCalllog(value)
  {
    return this.http.post('https://interviewtask.herokuapp.com/callLog/createLog',value)
    .pipe(map(data=>this.createLog=data.json()))
  }
  createMessage(value)
  {
    return this.http.post('https://interviewtask.herokuapp.com/message/createMessage',value)
    .pipe(map(data=>this.createMessage1=data.json()))
  }
  }