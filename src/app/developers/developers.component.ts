import { Component, OnInit } from '@angular/core';
import data from '../data.json'

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  public developersList:{
    dp: string,
    nameCap: string,
    name: string,
    rating: string,
    joining: string,
    time: string,
    location: string,
    language: string,
    projects: string,
    clients: string,
    des: string,
    qualifications: [string]
  }[] = data.developer;

}
