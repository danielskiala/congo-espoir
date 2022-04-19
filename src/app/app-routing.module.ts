import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/site/about/about.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { DonationComponent } from './components/site/donation/donation.component';
import { GaleryComponent } from './components/site/galery/galery.component';
import { HomeComponent } from './components/site/home/home.component';
;

const routes: Routes = [
  { path: '', redirectTo: 'site/home', pathMatch: 'full' },
  {path:"site/home", component:HomeComponent},
  {path:"site/galery", component:GaleryComponent},
  {path:"site/about", component:AboutComponent},
  {path:"site/contact", component:ContactComponent},
  {path:"site/donation", component:DonationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
