import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive ({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  openAdded = false;
  @HostListener('click') onclick() {
    if (!this.openAdded) {
      this.elmentRef.nativeElement.className += ' open';
    } else {
      this.elmentRef.nativeElement.classList.remove('open');
    }

    this.openAdded = !this.openAdded;
  }
  constructor(private elmentRef: ElementRef) {
  }
}
