import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive ({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // angular automatically adds/removes the class by this property binding construct
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
