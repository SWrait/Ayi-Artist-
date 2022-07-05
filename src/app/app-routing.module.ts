import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
      loadChildren: () => import('./artistas/page.module').then( m => m.PageModule)
    },
    {
      path: '404',
      component: ErrorPageComponent
    }, //volver para usar esto y mostrar un error
    {
      path: 'Test',
      component: TestComponent
    },
    {
      path: '**',
      redirectTo: '404'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


