import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddpaintComponent } from './addpaint/addpaint.component';

export const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch:'full'},
  {path:'addpaint',component: AddpaintComponent},
  // {path:'delete/{id}',component: Deletepaint}, chyba dobrze :D
  // {path:'userpaints',component: YourLibrary},
  // {path:'stockpaints',component: Library},

];
