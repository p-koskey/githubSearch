import { DisplayComponent } from './display/display.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryComponent } from './repository/repository.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'Users', component: DisplayComponent},
  { path: 'Repositories', component: RepositoryComponent},
  { path:'**', component:NotFoundComponent},

  { path: '', redirectTo:"/Users", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
