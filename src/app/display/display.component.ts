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
  constructor(private dataService:DataService ) { }

  ngOnInit(): void {

  this.dataService.getData();
   this.profile = this.dataService.profile;
  }

}
