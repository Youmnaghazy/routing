import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';
import { AiiComponent } from './aii/aii.component';

export const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"},
  {path:"home" , component:HomeComponent},
  {path:"about",component:AboutComponent , children:[
    {path:"front",component:FrontComponent},
    {path:"back",component:BackComponent},
    {path:"ai",component:AiiComponent}
  ]},
  {path:"contact",component:ContactComponent},
  {path:"**" , component:NotfoundComponent}

];
