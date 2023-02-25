import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerComponent } from './hamburger/hamburger.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HamburgerComponent
  ],
  exports: [
    HamburgerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UikitModule { }
