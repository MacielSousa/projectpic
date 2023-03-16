import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './singup/signup.component';

@NgModule({
    declarations: [ 
        SignInComponent,
        SignUpComponent
     ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        VMessageModule,
        RouterModule
    ]
})
export class HomeModule {  }