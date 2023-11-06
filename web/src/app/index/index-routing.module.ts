import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index.component';
import {DialogEntryComponent} from "../../common/dialog-entry/dialog-entry.component";
import {Component1Component} from "./component1/component1.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'component1Path',
        component: DialogEntryComponent,
        data: {
          component: Component1Component
        }
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
