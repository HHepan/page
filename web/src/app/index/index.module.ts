import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from './index.component';
import {PageModule} from '../../common/page/page.module';
import {SizeModule} from '../../common/size/size.module';
import {IndexRoutingModule} from './index-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DialogEntryModule} from "../../common/dialog-entry/dialog-entry.module";
import {Component1Component} from "./component1/component1.component";



@NgModule({
  declarations: [ IndexComponent, Component1Component ],
  imports: [
    CommonModule,
    PageModule,
    SizeModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    DialogEntryModule
  ]
})
export class IndexModule { }
