import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

   tiles: Tile[] = [
    {date: '26 june 2019', projectname: "Task Developer", status: "In-progress", color: 'lightblue'},
    {date: '26 june 2019', projectname: "Task Developer", status: "In-progress", color: 'lightblue'}
    
  ];

  ngOnInit() {
  }

}
