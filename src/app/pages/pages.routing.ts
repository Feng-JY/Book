import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Prototype } from './prototype/prototype'
import { Float } from './float/float';
import { Chart } from './chart/chart';
import { Learn } from './learn/learn'; 

const routes: Routes = [
  { path: '', redirectTo: 'home/about', pathMatch: 'full' },
  {
    path: 'home',
    component: Home,
    children: [
      { path: 'about', component: About },
      { path: 'prototype', component: Prototype },
      { path: 'float', component: Float },
      { path: 'chart', component: Chart },
      { path: 'chart', component: Chart },
      { path: 'learn', component: Learn }
    ]
  },
  { path: '**', redirectTo: 'home/about', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);