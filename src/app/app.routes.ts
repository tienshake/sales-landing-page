import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
];
