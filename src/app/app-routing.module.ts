import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { ApplicationComponent } from './application/application.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'application',component:ApplicationComponent},
  {path:'about-us' ,component:AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
