import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { FiltersComponent } from './components/menu/filters/filters.component';
import { CartComponent } from './components/menu/cart/cart.component';
import { ProductListComponent } from './components/menu/product-list/product-list.component';
import { CartItemComponent } from './components/menu/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/menu/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MenuComponent,
    FiltersComponent,
    CartComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
