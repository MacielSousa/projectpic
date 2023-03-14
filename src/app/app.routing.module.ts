import { SignInComponent } from './home/signin/signin.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { RouterModule, Routes } from "@angular/router";
import { ErrorsModule } from './errors/errors.module';
import { NotFoundComponent } from './errors/not-found/not-found.component';


const routes: Routes = [
    {path: '', component: SignInComponent},
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