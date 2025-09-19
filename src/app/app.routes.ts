import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'invest',
    loadComponent: () => import('./tabs/invest/invest.page').then((m) => m.InvestPage),
  },
  {
    path: 'discover',
    loadComponent: () => import('./tabs/discover/discover.page').then((m) => m.DiscoverPage),
  },
];
