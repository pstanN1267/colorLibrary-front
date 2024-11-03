import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddpaintComponent } from './addpaint/addpaint.component';
import { LibraryComponent } from './library/library.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'addpaint', component: AddpaintComponent },
  {path:'library',component: LibraryComponent},
];
