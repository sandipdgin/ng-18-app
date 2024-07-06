import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appValidateRangNos]',
  standalone: true
})
export class ValidateRangNosDirective {

  @Input() minValue!: string;
  @Input() maxValue!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('document:focusout', ['$event'])
  onKeyPress(event: KeyboardEvent){
    const currentValue = parseInt(this.el.nativeElement.value);

    if(currentValue > parseInt(this.maxValue)){
      console.log("Please enter 10 to 100 vlaues.", currentValue, this.maxValue )
      this.el.nativeElement.value = this.minValue;
      event.preventDefault();
    }

    if(currentValue < parseInt(this.minValue)){
      console.log("Please enter 10 to 100 vlaues.", currentValue, this.minValue)
      this.el.nativeElement.value = this.minValue;
      event.preventDefault();
    }
  }

}
