
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundpageComponent } from './not-foundpage/not-foundpage.component';
import { UserLoginComponent } from './UserLogin/user-login/user-login.component';
import { SingUpUserComponent } from './Singup/sing-up-user/sing-up-user.component';
import { HomeComponentComponent } from './Home/home-component/home-component.component';
import { MyeventsComponent } from './myevents/myevents.component'; 
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ProfileComponent } from './User-components/profile/profile.component';
import { EditProfileComponent } from './User-components/edit-profile/edit-profile.component';
import {CreateEventsComponent} from './User-components/create-events/create-events.component';
import { CreateFacultyEventsComponent } from './User-components/create-faculty-events/create-faculty-events.component';
import { CreateCommunityEventsComponent } from './User-components/create-community-events/create-community-events.component';


export const routes: Routes = [


  { path: 'singup', component: SingUpUserComponent }, 
  { path: 'login', component: UserLoginComponent }, 
  { path: 'home', component: HomeComponentComponent},
  { path: 'miseventos', component: MyeventsComponent },
  { path: 'home', component:HomeComponentComponent},
  { path: 'forgotpassword', component:ForgotPasswordComponent},
  { path: 'aboutus', component:AboutUSComponent },
  { path: 'profile', component:ProfileComponent},
  { path: 'editprofile', component:EditProfileComponent},
  { path: 'createevent', component:CreateEventsComponent},
  { path: 'createfacultyevent', component:CreateFacultyEventsComponent},
  { path: 'createcommunityevent', component:CreateCommunityEventsComponent},
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
