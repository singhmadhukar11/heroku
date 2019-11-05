import { Component, OnInit } from '@angular/core';
export interface Tile {
  date: string;
  projectname: string;
  status: string;
  color: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() {}

  notification = 2;

   tiles: Tile[] = [
    {date: '26 june 2019', projectname: "Task Developer", status: "In-progress", color: 'orange'},
    {date: '16 june 2019', projectname: "NO Developer", status: "completed", color: 'green'},
    {date: '12 june 2019', projectname: "Work", status: "failed", color: 'red'},
    {date: '1 june 2019', projectname: "Work1", status: "on-hold", color: 'blue'}
  ];

alert(data){
	alert(data.projectname);
}

delete(){
	alert("Deleted");
}

edit(){
	alert("Edited");
}
  ngOnInit() {
  }

}
