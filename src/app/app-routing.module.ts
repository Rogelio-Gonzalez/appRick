import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  /*{ path: 'list', loadChildren: () => import('./pages/employees/list/list.module').then(m => m.ListModule) }, 
  { path: 'new', loadChildren: () => import('./pages/employees/new/new.module').then(m => m.NewModule) }, 
  { path: 'details', loadChildren: () => import('./pages/employees/details/details.module').then(m => m.DetailsModule) }, 
  { path: 'edit', loadChildren: () => import('./pages/employees/edit/edit.module').then(m => m.EditModule) }
  {path : 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path : 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)},
  {path : 'characters', loadChildren: () => import('./pages/characters/characters.module').then(m => m.RegisterModule)},
  {path : 'favorites', loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.RegisterModule)},*/
  {path: 'login', component: LoginComponent},
  {path: 'characters', component: CharactersComponent},
  {path : 'favorites', component : FavoritesComponent},
  {path : '**', pathMatch : 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
