import {
  Component, ViewEncapsulation, AfterContentInit, QueryList,
  ContentChildren, HostBinding, Renderer, ElementRef, EventEmitter, Input
} from '@angular/core';
import { shrinkOut } from './navMenu.animations';
import { NavMenuItem } from './nav-menu-item';

@Component({
  selector: 'sub-nav-menu',
  styleUrls: ['./menu.scss'],
  template: `<div class="sub-nav-menu">
   <div class="sub-nav-menu-title" [ngClass]="{open: isOpen}" (click)="open()">    
      {{_title}}  
    <i class="material-icons" *ngIf="!_isMenu">&#xE316;</i> 
   </div>
   <ul #menu class="sub-nav-menu-content" [@shrinkOut]="getOpenStatus()">           
   <ng-content></ng-content>   
   </ul>
   </div>`,
  encapsulation: ViewEncapsulation.None,
  animations: [shrinkOut]
})
export class SubNavMen implements AfterContentInit {
  private _icon: string = '';
  private _title: string = '';
  public isOpen: boolean = false;
  private _isMenu: boolean = false;

  @Input()
  set icon(icon: any) {
    this._icon = icon;
  }

  @Input()
  set title(title: any) {
    this._title = title;
  }

  @HostBinding('class.nav-menu-selected')
  public isSelected: boolean = false;

  @ContentChildren(NavMenuItem)
  items: QueryList<any> = null;

  @ContentChildren(SubNavMen)
  subs: QueryList<any> = null;

  constructor(
    private render: Renderer,
    private el: ElementRef
  ) {

  }

  ngAfterContentInit() {
    if (this.items.length == 0 && this.subs.length == 1) {
      this._isMenu = true;
    }
    setTimeout(() => {
      let seletedItem = this.el.nativeElement.getElementsByClassName('nav-item-selected');
      if (seletedItem.length > 0) {
        this.isOpen = true;
      }
    }, 0);

  }

  //菜单栏点击是否打开
  open() {
    this.isOpen = !this.isOpen;
  }

  getOpenStatus() {
    return this.isOpen ? 'open' : 'noOpen';
  }
}