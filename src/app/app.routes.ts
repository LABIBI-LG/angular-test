import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'family',
    loadComponent: () =>
      import('./feature/family/family.component').then(
        (c) => c.FamilyComponent
      ),
  },
];
