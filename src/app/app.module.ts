import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeddingComponent } from './wedding/wedding.component';
import { CommonComponent } from './common/common.component';
import { TrendsComponent } from './trends/trends.component';
import { XvComponent } from './xv/xv.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeddingComponent,
    CommonComponent,
    TrendsComponent,
    XvComponent,
    FooterComponent,
    HomeComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
