import { Directive, HostListener, ElementRef, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    constructor(private theElement: ElementRef){}
    
    @HostListener('click') toggleOpen(event: Event){
        this.isOpen = !this.isOpen;
    }
}