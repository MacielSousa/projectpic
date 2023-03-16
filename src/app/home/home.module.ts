import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './singup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SingUpService } from './singup/singup.service';

@NgModule({
    declarations: [ 
        SignInComponent,
        SignUpComponent,
        HomeComponent
     ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers:[
        SingUpService
    ]
})
export class HomeModule {  }