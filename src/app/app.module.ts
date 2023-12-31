import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { BannerComponent } from './Home/banner/banner.component';
import { ChiefSectionComponent } from './Home/chief-section/chief-section.component';
import { GallerySectionComponent } from './Home/gallery-section/gallery-section.component';
import { LocationContactComponent } from './Home/location-contact/location-contact.component';
import { FooterComponent } from './Home/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './shared-forms/login/login.component';
import { HomeComponent } from './Home/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { MenuItemsModule } from './menu-items/menu-items.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ChiefSectionComponent,
    GallerySectionComponent,
    LocationContactComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MenuItemsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
