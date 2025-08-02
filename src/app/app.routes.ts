import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
      { path: '', component: HomeComponent },   // default route
  { path: 'home', component: HomeComponent },
  // later: { path: 'about', component: AboutComponent },
  //        { path: 'projects', component: ProjectsComponent },
  //        { path: 'contact', component: ContactComponent },
];
