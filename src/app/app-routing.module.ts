import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared-forms/login/login.component';
import { HomeComponent } from './Home/home/home.component';

import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu-items/menu/MenuComponent';
import { CartComponent } from './cart/cart.component';

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
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
