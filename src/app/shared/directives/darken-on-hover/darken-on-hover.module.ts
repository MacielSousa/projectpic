import { NgModule } from "@angular/core";
import { DarkenOnHoverDirectiver } from "./darken-on-hover.directiver";


@NgModule({
    declarations: [DarkenOnHoverDirectiver],
    exports: [DarkenOnHoverDirectiver]
})
export class DarkenOnHoverModule{}