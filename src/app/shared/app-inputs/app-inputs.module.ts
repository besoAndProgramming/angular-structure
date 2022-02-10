import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEmailInputComponent } from './app-email-input/app-email-input.component';
import { AppTextInputComponent } from './app-text-input/app-text-input.component';



@NgModule({
  declarations: [
    AppEmailInputComponent,
    AppTextInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppInputsModule { }
