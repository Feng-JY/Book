import { NgModule } from '@angular/core';
import { LfNavMenuModule } from './navMenu';
import { MarkdownModule } from './markdown';

const LIB_MODULE = [
  LfNavMenuModule,
  MarkdownModule
];
 
@NgModule({
  exports: [LIB_MODULE]
})
export class LibModule {
 
}