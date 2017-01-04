import { Component, HostListener, ViewEncapsulation } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'book-home', 
  templateUrl: './home.html',
  styleUrls: ['./home.scss'], 
})
export class Home {

  isScreenSmall(): boolean { 
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }
}