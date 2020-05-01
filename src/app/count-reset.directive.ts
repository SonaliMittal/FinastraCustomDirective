import { Directive, OnInit, ElementRef, HostListener, EventEmitter, Output, ɵConsole } from '@angular/core';

@Directive({
  selector: '[appCountReset]'
})
export class CountResetDirective implements OnInit {
  private counter = 1;
  private x = 0;
  private show: any;
  private timeStamp: any;
  @Output() clickDirective: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit() {
    this.count();
  }
  @HostListener('click', ['$event']) resetValue(event) {
    this.clickDirective.emit();
    clearTimeout(this.timeStamp);
    document.getElementById("elementCount").innerHTML = "1";
  }
  count() {
    // get ui widget accros application.
    this.show = document.body.getElementsByTagName("*");
    this.x = this.show.length;
    //set couter value on ui widget
    document.getElementById("elementCount").innerHTML = this.counter.toString();
    this.counter++;
    if (this.counter < this.x) {
      this.timeStamp = setTimeout(() => {
        this.count();
      }, 500)

    }
  }
}
