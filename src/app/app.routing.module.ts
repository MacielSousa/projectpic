import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { ErrorsModule } from './errors/errors.module';
import { NotFoundComponent } from './errors/not-found/not-found.component';



const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
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