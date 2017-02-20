import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PortalDirective } from './directives'

let COMMON_MODULES = [
  AngularCommonModule,
  FormsModule,
  RouterModule,
  ChartsModule
]

@NgModule({
  imports: [
    COMMON_MODULES
  ],
  declarations: [
    PortalDirective,
  ],
  providers: [],
  exports: [
    COMMON_MODULES,
    PortalDirective,
  ],
  entryComponents: [] 
})
export class CommonModule {
}