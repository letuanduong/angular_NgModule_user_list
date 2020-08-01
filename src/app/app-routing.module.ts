import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'users', loadChildren: './users/users.module#UsersModule'},
  {path: 'groups', loadChildren: './groups/groups.module#GroupsModule'},
  {path: 'cores', loadChildren: './core/core.module#CoreModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
