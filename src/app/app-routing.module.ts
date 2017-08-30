import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shoppinglist', component: ShoppingListComponent },
  // { path: 'users', component: UsersComponent, children: [
  //   { path: ':id/:name', component: UserComponent }
  // ] },
  // { path: 'servers',
  //   // canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   component: ServersComponent,
  //     children: [
  //     { path: ':id', component: ServerComponent, resolve: {serverData: ServerResolver} },
  //     { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }]
  // },
  // // { path: 'not-found', component: PageNotFoundComponent },
  // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Sorry, Page not found'} },
  // { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
