import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/site/home/home.component';
import { NavComponent } from './components/site/nav/nav.component';
import { FooterComponent } from './components/site/footer/footer.component';
import { GaleryComponent } from './components/site/galery/galery.component';
import { AboutComponent } from './components/site/about/about.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { DonationComponent } from './components/site/donation/donation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    GaleryComponent,
    AboutComponent,
    ContactComponent,
    DonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
