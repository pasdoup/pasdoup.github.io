import { Component, OnInit } from '@angular/core';
import { model3d } from '../models/model3d.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
    models3d: model3d[];

  ngOnInit() {
    this.models3d = [
      {
        title: "fan",
        author: "Axel",
        view: 'assets/img/fan.png',
        source: 'assets/models/fan.glb',
      },
      {
        title: "fish",
        author: "Axel",
        view: 'assets/img/fish.png',
        source: 'assets/models/fish.glb',
      },
      {
        title: "tree",
        author: "Axel",
        view: 'assets/img/littleTree.png',
        source: 'assets/models/littleTree.glb',
      },
      {
        title: "scarab",
        author: "Axel",
        view: 'assets/img/scarab.png',
        source: 'assets/models/scarab.glb',
      },
      {
        title: "gun",
        author: "Axel",
        view: 'assets/img/gun.png',
        source: 'assets/models/gun.glb',
      },
      {
        title: "skull",
        author: "Axel",
        view: 'assets/img/skull.png',
        source: 'assets/models/skull.glb',
      },
      {
        title: "knight",
        author: "Axel",
        view: 'assets/img/knight.png',
        source: 'assets/models/knight.glb',
      },
      {
        title: "scarab 2",
        author: "Axel",
        view: 'assets/img/scarab2.png',
        source: 'assets/models/scarab2.glb',
      },
      {
        title: "fishing rod",
        author: "Axel",
        view: 'assets/img/fishing_rod.png',
        source: 'assets/models/fishing_rod.glb',
      }
    ];
  }
}
