import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudComponent } from './pages/crud/crud.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { ViewMoreComponent } from './pages/viewMore/viewMore.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RankingComponent,
        pathMatch : 'full'
      },
      {
        path: 'Form',
        component: CrudComponent
      },
      {
        path: 'viewMore/:id',
        component: ViewMoreComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArtistasRoutingModule { }
