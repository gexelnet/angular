import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [

  { path: 'blog', component: BlogsComponent },
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
