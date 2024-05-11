
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundpageComponent } from './not-foundpage/not-foundpage.component';
import { UserLoginComponent } from './UserLogin/user-login/user-login.component';
import { SingUpUserComponent } from './Singup/sing-up-user/sing-up-user.component';
import { HomeComponentComponent } from './Home/home-component/home-component.component';
import { MyeventsComponent } from './myevents/myevents.component'; 
import { CommunityeventsComponent } from './communityevents/communityevents.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ProfileComponent } from './User-components/profile/profile.component';
import { EditProfileComponent } from './User-components/edit-profile/edit-profile.component';
import { PremiumComponent } from './Premium/premium/premium.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import {CreateEventsComponent} from './User-components/create-events/create-events.component';
import { CreateFacultyEventsComponent } from './User-components/create-faculty-events/create-faculty-events.component';
import { CreateCommunityEventsComponent } from './User-components/create-community-events/create-community-events.component';
import { AddAssistantComponent } from './add-assistant/add-assistant.component';
import { EventsComponent } from './events/events.component';


export const routes: Routes = [


  { path: 'singup', component: SingUpUserComponent }, 
  { path: 'login', component: UserLoginComponent }, 
  { path: 'home', component: HomeComponentComponent},
  { path: 'miseventos', component: MyeventsComponent },
  { path: 'communityevents', component: CommunityeventsComponent },
  { path: 'home', component:HomeComponentComponent},
  { path: 'premium', component:PremiumComponent},
  { path: 'forgotpassword', component:ForgotPasswordComponent},
  { path: 'aboutus', component:AboutUSComponent },
  { path: 'profile', component:ProfileComponent},
  { path: 'editprofile', component:EditProfileComponent},
  { path: 'termsofservice', component:TermsAndConditionsComponent },
  { path: 'createevent', component:CreateEventsComponent},
  { path: 'createfacultyevent', component:CreateFacultyEventsComponent},
  { path: 'createcommunityevent', component:CreateCommunityEventsComponent},
  { path: 'assist', component:AddAssistantComponent },
  { path: 'events', component:EventsComponent},
  { path: '', redirectTo: 'home',  pathMatch: 'full', },
  { path: '**', component: NotFoundpageComponent } 
  // { path:'dashboard',
  //   loadComponent: () => import(),
  //   children:[
  //   ]
  // },










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
