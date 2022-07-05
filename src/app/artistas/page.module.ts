import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistasRoutingModule } from './artistas-routing.module';
import { CrudComponent } from './pages/crud/crud.component';
import { ViewMoreComponent } from './pages/viewMore/viewMore.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './pages/component/input/input.component';
import { ChartComponent } from './pages/component/chart/chart.component';



@NgModule({
  declarations: [
    CrudComponent,
    ViewMoreComponent,
    RankingComponent,
    InputComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    ArtistasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CrudComponent,
    RankingComponent
  ]
})
export class PageModule { }
