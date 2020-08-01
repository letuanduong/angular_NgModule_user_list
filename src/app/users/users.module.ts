import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import {RouterModule, Routes} from "@angular/router";
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {CoreModule} from "../core/core.module";

const route: Routes = [
  {path: 'list', component: UserListComponent},
  {path: 'add', component: UserAddComponent},
];

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserDeleteComponent,
    UserEditComponent,
    UserEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    CoreModule,
  ]
})
export class UsersModule { }
