import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {RouterModule, Routes} from "@angular/router";
import { InputSearchComponent } from './input-search/input-search.component';

const route: Routes = [
  {path: '', component: MenuComponent}
]

@NgModule({
  declarations: [
    MenuComponent,
    InputSearchComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class CoreModule { }
