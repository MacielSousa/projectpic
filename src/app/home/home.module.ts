import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/vmessage/vmessage.module';

@NgModule({
    declarations: [ SignInComponent ],
    imports: [ ReactiveFormsModule, CommonModule, VMessageModule]
})
export class HomeModule {  }