import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Prototype } from './prototype/prototype'
import { Float } from './float/float';

const routes: Routes = [
  { path: '', redirectTo: 'home/about', pathMatch: 'full' },
  {
    path: 'home',
    component: Home,
    children: [
      { path: 'about', component: About },
      { path: 'prototype', component: Prototype },
      { path: 'float', component: Float }
    ] 
  },
  { path: '**', redirectTo: 'home/about', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);