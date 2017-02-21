import { NgModule } from '@angular/core';
import { LfNavMenuModule } from './navMenu';
import { MarkdownModule } from './markdown';
import { JsonEditorModule } from './json-editor';
import { MonacoEditorModule } from './monaco-editor';

const LIB_MODULE = [
  LfNavMenuModule,
  MarkdownModule,
  JsonEditorModule,
  MonacoEditorModule
];
 
@NgModule({
  exports: [LIB_MODULE]
})
export class LibModule {
 
}