import { Component, Input, OnInit } from '@angular/core';
import { model3d } from '../models/model3d.model';
import { CanvasDisplayService } from '../services/canvas-display.service';

@Component({
  selector: 'app-model',
  templateUrl: './model3d.component.html',
  styleUrls: ['./model3d.component.css']
})
export class ModelComponent  implements OnInit{

  @Input () model3d!: model3d;


  constructor(private canvasDisplayService : CanvasDisplayService) { }

  ngOnInit() {
  }

  onViewIt() {
    let canva = document.getElementById("canvas");

    this.canvasDisplayService.createScene(this.model3d.source, canva);
    this.canvasDisplayService.startRenderingLoop(canva);
    this.canvasDisplayService.createControls(canva);
  }

}
