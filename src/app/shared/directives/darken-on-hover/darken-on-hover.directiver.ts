import { Directive, ElementRef, HostListener, Input, Renderer } from "@angular/core";


@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirectiver{

    @Input() brightness = '70%';

    constructor(
        readonly el: ElementRef,
        readonly render: Renderer
    ){}

    @HostListener('mouseover')
    darkenOn(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}