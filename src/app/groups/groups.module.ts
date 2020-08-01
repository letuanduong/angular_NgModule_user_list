import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../core/core.module";

const route: Routes = [
  {path: 'list', component: GroupListComponent}
]

@NgModule({
  declarations: [
    GroupListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    CoreModule
  ]
})
export class GroupsModule { }
