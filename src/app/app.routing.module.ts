import { AuthGard } from './core/auth/auth.guards';
import { SignInComponent } from './home/signin/signin.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { RouterModule, Routes } from "@angular/router";
import { ErrorsModule } from './errors/errors.module';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SignUpComponent } from './home/singup/signup.component';


const routes: Routes = [
    {
        path: '', 
        component: SignInComponent,
        canActivate: [AuthGard]
    },
    {
        path: 'signup', 
        component: SignUpComponent
    },
    {
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        }
    },
    {path: 'p/add', component: PhotoFormComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule, ErrorsModule ]
})
export class AppRoutingModule {}