import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared-forms/login/login.component';
import { HomeComponent } from './Home/home/home.component';
import { ItemMenuComponent } from './menud-items/item-menu/item-menu.component';
import { ItemDetailsComponent } from './menud-items/item-details/item-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'menu',
    component: ItemMenuComponent,
  },
  {
    path: 'item/:id',
    component: ItemDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
