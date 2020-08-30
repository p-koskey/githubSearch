import { Repo } from './../repo';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repo:Repo;
  constructor(public dataService:DataService) { }

  searchRepo( repoName:string){  
    
    this.dataService.search(repoName);

}
  ngOnInit(): void {
  }

}

