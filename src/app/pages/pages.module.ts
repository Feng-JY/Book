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

const PAGES = [ Home, About, Prototype, Float ]; 

@NgModule({
  imports: [routing, CommonModule, MaterialModule.forRoot(), LibModule, FlexLayoutModule.forRoot()],  
  declarations: [...PAGES],  
}) 
export class PagesModule {
}