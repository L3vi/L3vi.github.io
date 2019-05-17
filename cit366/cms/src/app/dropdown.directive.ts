import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[cmsDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen: Boolean = false;

  @HostListener('click') click() {
    this.isOpen = !this.isOpen;
  }

  constructor(private elementReference: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.elementReference.nativeElement
    // this.renderer.setStyle(this.elementReference.nativeElement, "backgroundColor", "red");
  }
}
