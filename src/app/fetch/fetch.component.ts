import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  users = [];

  constructor(private apiService: ApiDataService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe((data: any[])=>{
      console.log(data);
      this.users = data;
    })  
  }
}