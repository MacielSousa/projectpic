import { DarkenOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';
import { CardModule } from './../../shared/components/card/card.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from "./filter-pipe-description.pipe";
import { PhotoModule } from "../photo/photo.module";
import { SearchComponent } from './search/search.component';


@NgModule({
    declarations:[
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports : [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule
    ]
})
export class PhotoListModule {}