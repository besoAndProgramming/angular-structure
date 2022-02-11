import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPrimaryButtonComponent } from './app-primary-button/app-primary-button.component';
import { AppSecandaryButtonComponent } from './app-secandary-button/app-secandary-button.component';



@NgModule({
  declarations: [
    AppPrimaryButtonComponent,
    AppSecandaryButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppButtonsModule { }
