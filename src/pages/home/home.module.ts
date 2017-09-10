import { TooltipsChildModule } from './../../ionic-tooltips/src/tooltips.child.module';
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
    TooltipsChildModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}