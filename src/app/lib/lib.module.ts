import { NgModule } from '@angular/core';
import { LfNavMenuModule } from './navMenu';
import { MarkdownModule } from './markdown';
import { JsonEditorModule } from './json-editor';

const LIB_MODULE = [
  LfNavMenuModule,
  MarkdownModule,
  JsonEditorModule
];
 
@NgModule({
  exports: [LIB_MODULE]
})
export class LibModule {
 
}