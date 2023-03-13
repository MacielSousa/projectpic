import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/filter-pipe-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';


@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent,
        PhotoFormComponent,
        PhotosComponent,
        FilterByDescription,
        LoadButtonComponent,
    ],
    exports: [],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class PhotosModule{}