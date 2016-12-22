import { NgModule, ModuleWithProviders } from '@angular/core';
import { LfNavMenu } from './navMenu';
import { SubNavMen } from './sub-nav-menu';
import { CommonModule } from '@angular/common';
import { NavMenuItem } from './nav-menu-item';
@NgModule({
  imports: [CommonModule],
  exports: [LfNavMenu, SubNavMen, NavMenuItem],
  declarations: [LfNavMenu, SubNavMen, NavMenuItem] 
})
export class LfNavMenuModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LfNavMenuModule,
      providers: []
    };
  }
}