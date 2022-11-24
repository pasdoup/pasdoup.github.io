import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CanvasDisplayService } from '../services/canvas-display.service';


@Component({
  selector: 'app-canva',
  templateUrl: './canva.component.html',
  styleUrls: ['./canva.component.css']
})
export class CanvaComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') private canvasRef: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  constructor(private canvasDisplayService : CanvasDisplayService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.canvasDisplayService.createScene('', this.canvas);
    this.canvasDisplayService.startRenderingLoop(this.canvas);
    this.canvasDisplayService.createControls(this.canvas);
  }
}
