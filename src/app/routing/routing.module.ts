import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './../display/display.component';
import { RepositoryComponent } from './../repository/repository.component';
import { NotFoundComponent } from './../not-found/not-found.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'Users', component: DisplayComponent},
  { path: 'Repositories', component: RepositoryComponent},
  { path: '',   redirectTo: '/Users', pathMatch: 'full' },
  { path:'**', component:NotFoundComponent},


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
      RouterModule
   ]
})
export class RoutingModule { };
