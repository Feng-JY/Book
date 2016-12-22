import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';

const routes: Routes = [
  { path: '', redirectTo: 'home/about', pathMatch: 'full' },
  { path: '**', redirectTo: 'home/about', pathMatch: 'full' }, 
  {
    path: 'home',
    component: Home,
    children: [
      { path: 'about', component: About }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);