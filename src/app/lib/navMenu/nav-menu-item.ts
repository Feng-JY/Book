import { Component, ViewEncapsulation, HostListener, HostBinding, Inject, forwardRef } from '@angular/core';
import { SubNavMen } from './sub-nav-menu';

@Component({
  selector: 'nav-menu-item',
  template: `<li class="nav-menu-item">
  <ng-content></ng-content>
  </li>`,
  encapsulation: ViewEncapsulation.None
})
export class NavMenuItem {
  private _subNavMenu: any;
  @HostBinding('class.nav-item-selected')
  public isSelected: boolean = false; 
}