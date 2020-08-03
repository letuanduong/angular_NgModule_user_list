import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import {RouterModule, Routes} from "@angular/router";
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {CoreModule} from "../core/core.module";
import {ReactiveFormsModule} from "@angular/forms";
import { UserServerComponent } from './user-server/user-server.component';

const route: Routes = [
  {path: '', component: UserListComponent},
  {path: 'add', component: UserAddComponent},
  {path: ':id/edit', component: UserEditComponent},
  {path: 'server', component: UserServerComponent}
];

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserDeleteComponent,
    UserEditComponent,
    UserEditComponent,
    UserServerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    CoreModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
