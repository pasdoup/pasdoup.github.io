import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CanvaComponent } from './canva/canva.component';
import { CvComponent } from './cv/cv.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GalleryComponent } from './gallery/gallery.component'

const routes: Routes = [
  {path: '', component: AccueilComponent },
  {path: 'portfolio', component: PortfolioComponent },
  {path: 'cv', component: CvComponent},
  {path: 'canva', component: CanvaComponent},
  {path: 'gallery', component: GalleryComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {}