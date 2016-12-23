import { NgModule, ModuleWithProviders } from '@angular/core';
import { routing } from './pages.routing';
import { Home } from './home/home';
import { CommonModule } from 'app/common';
import { MaterialModule } from '@angular/material';
import { LibModule } from 'app/lib';
import { About } from './about/about';
import { Prototype } from './prototype/prototype'
import { Float } from './float/float';

const PAGES = [ Home, About, Prototype, Float ]; 

@NgModule({
  imports: [routing, CommonModule.forRoot(), MaterialModule.forRoot(), LibModule],  
  declarations: [...PAGES],
}) 
export class PagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PagesModule,
      providers: []
    };
  }
}