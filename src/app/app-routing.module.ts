import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path:"aboutus", component:AboutUsComponent},
  {path:"ourservices", component:OurServicesComponent},
  {path:"ourwork", component:OurWorkComponent},
  {path:"applyjob", component:ApplyjobComponent},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
