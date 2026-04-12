import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'showcase', loadComponent: () => import('./pages/showcase/showcase.component').then(m => m.ShowcaseComponent) },
  { path: 'roadmap', loadComponent: () => import('./pages/roadmap/roadmap.component').then(m => m.RoadmapComponent) },
  { path: '**', redirectTo: '' }
];
