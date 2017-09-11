import { TooltipsModule } from './../../ionic-tooltips/src';
import { CommonModule } from '@angular/common';
import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    CommonModule,
    IonicPageModule.forChild(HomePage),
    TooltipsModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}