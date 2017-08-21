import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    private isOpen = false;

    constructor(private theElement: ElementRef){}
    
    @HostListener('click') toggleOpen(event: Event){
        if (!this.isOpen){
            this.theElement.nativeElement.classList.add('open');
        } else {
            this.theElement.nativeElement.classList.remove('open');
        }

        this.isOpen = !this.isOpen;
    }
}