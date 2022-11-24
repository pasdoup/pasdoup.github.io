import { Component, OnInit } from '@angular/core';
import { model3d } from './models/model3d.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  models3d: model3d[];

  ngOnInit() {
    
  }
}
