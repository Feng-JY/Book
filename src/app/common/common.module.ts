import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { MarkdownModule } from 'angular2-markdown';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PortalDirective } from './directives'

let COMMON_MODULES = [
  AngularCommonModule,
  FormsModule,
  RouterModule,
  MarkdownModule,
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