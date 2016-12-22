import { NgModule } from '@angular/core';
import { LfNavMenuModule } from './navMenu';
const LIB_MODULE = [
  LfNavMenuModule
];
@NgModule({
  exports: [LfNavMenuModule]
})
export class LibModule {
 
}