import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PannierComponent } from './pannier/pannier.component';
import { DetailsPhoneComponent } from './details-phone/details-phone.component';
import { ContactComponent } from './contact/contact.component';

const routes : Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"pannier",component:PannierComponent},
  {path:"contact",component:ContactComponent},
  {path:"phones/details/:id",component:DetailsPhoneComponent},
  {path:"**",component:PageNotFoundComponent},
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
