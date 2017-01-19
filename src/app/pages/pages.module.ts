import { NgModule, ModuleWithProviders } from '@angular/core';
import { routing } from './pages.routing';
import { Home } from './home/home';
import { CommonModule } from 'app/common';
import { MaterialModule } from '@angular/material';
import { LibModule } from 'app/lib';
import { About } from './about/about';
import { Prototype } from './prototype/prototype'
import { Float } from './float/float';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Chart } from './chart/chart';
import { Learn, PortalComponent } from './learn'; 

const PAGES = [ Home, About, Prototype, Float, Chart, Learn, PortalComponent ]; 

@NgModule({ 
imports: [routing, CommonModule, LibModule, MaterialModule.forRoot(), FlexLayoutModule.forRoot() ],  
  declarations: [...PAGES],  
  entryComponents: [ PortalComponent ]     
})  
export class PagesModule {
}