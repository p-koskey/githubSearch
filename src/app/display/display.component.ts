import { Repo } from './../repo';
import { User } from './../user';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  profile: User;
  repo:Repo;
  username:string
  myUserName:string = 'p-koskey';
  constructor(public dataService:DataService ) { }
  
  searchUser(username:string, $event){
    if (username!==''){
      this.dataService.getData(username||$event.target.value);
       this.profile = this.dataService.profile;
    
       this.dataService.getRepo(username||$event.target.value);
  }
}
  ngOnInit(): void {
  
      this.dataService.getData(this.myUserName);
      this.profile = this.dataService.profile;
   
      this.dataService.getRepo(this.myUserName);
    
  

}
}
