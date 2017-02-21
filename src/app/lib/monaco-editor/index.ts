import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonacoEditorComponent } from './monaco-editor.component';

export * from './monaco-editor.component';

@NgModule({
  imports: [CommonModule],
  exports: [MonacoEditorComponent],
  declarations: [MonacoEditorComponent],
  providers: [],
})
export class MonacoEditorModule { }