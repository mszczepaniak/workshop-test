import {MateDetailsComponent} from './app/mate-details/mate-details.component';
import {MateListComponent} from './app/mate-list/mate-list.component';
import {Routes} from '@angular/router';
import {NotFoundComponent} from './app/not-found/not-found.component';
import {LoginComponent} from './app/login/login.component';

export const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'mates', component: MateListComponent},
  {path: 'mates/:username', component: MateListComponent},
  {path: 'mates/details/:id', component: MateDetailsComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];
