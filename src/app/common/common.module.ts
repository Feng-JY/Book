import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
let COMMON_MODULES = [
  AngularCommonModule,
  MaterialModule,
  FormsModule,
  RouterModule
]

@NgModule({
  imports: [
    COMMON_MODULES 
  ],
  declarations: [

  ],
  exports: [
   COMMON_MODULES,    
  ]
})
export class CommonModule { }