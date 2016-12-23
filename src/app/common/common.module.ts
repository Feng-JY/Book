import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { MarkdownModule } from 'angular2-markdown';

let COMMON_MODULES = [
  AngularCommonModule,
  MaterialModule,
  FormsModule,
  RouterModule,
  MarkdownModule,
]

@NgModule({
  imports: [
    COMMON_MODULES
  ],
  declarations: [

  ],
  providers: [],
  exports: [
    COMMON_MODULES,
  ]
})
export class CommonModule {
  static forRoot(): ModuleWithProviders {
    return { 
      ngModule: CommonModule,
      providers: [] 
    };
  }
}