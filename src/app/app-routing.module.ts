import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'page-1',
    loadComponent: () =>
      import('./wrapper/layout.component').then((c) => c.LayoutComponent),
  },
  {
    path: 'page-2',
    loadComponent: () =>
      import('./wrapper/layout.component').then((c) => c.LayoutComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
