
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
import { AdminVistaUsuariosComponent } from './admin-vista-usuarios/admin-vista-usuarios.component';
import { AdminVistaEventosComponent } from './admin-vista-eventos/admin-vista-eventos.component';
import { EventsComponent } from './events/events.component';
import { AuthGuard } from './commons/Security/AuthGuard';
import { AdminCheck } from './commons/Security/AdminCheck';
import { UsermanualComponent } from './usermanual/usermanual.component';
import { MyassistsComponent } from './myassists/myassists.component';
import { UserComponent } from './user/user.component';

import { ContactComponent } from './commons/Contact/contact.component';

export const routes: Routes = [


  { path: 'singup', component: SingUpUserComponent }, 
  { path: 'login', component: UserLoginComponent }, 
  { path: 'home', component: HomeComponentComponent},  
  { path: 'communityevents', component: CommunityeventsComponent, canActivate: [AuthGuard,AdminCheck] },
  { path: 'home', component:HomeComponentComponent},
  { path: 'forgotpassword', component:ForgotPasswordComponent},
  { path: 'aboutus', component:AboutUSComponent },
  { path: 'adminusers',component:AdminVistaUsuariosComponent, canActivate: [AuthGuard]},
  { path: 'adminevents', component:AdminVistaEventosComponent, canActivate: [AuthGuard]},
  { path: 'assist/:idEvento', component: AddAssistantComponent, canActivate: [AuthGuard,AdminCheck]},
 
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard,AdminCheck] },
  { path: 'editprofile', component: EditProfileComponent, canActivate: [AuthGuard,AdminCheck] },
  { path: 'termsofservice', component: TermsAndConditionsComponent},
  { path: 'createevent', component: CreateEventsComponent, canActivate: [AuthGuard,AdminCheck] },
  { path: 'createfacultyevent', component: CreateFacultyEventsComponent, canActivate: [AuthGuard,AdminCheck] },
  { path: 'createcommunityevent', component: CreateCommunityEventsComponent, canActivate: [AuthGuard,AdminCheck] },
  { path: 'events', component: EventsComponent, canActivate: [AuthGuard,AdminCheck] },
  { path: 'miseventos', component: MyeventsComponent, canActivate: [AuthGuard,AdminCheck] },
  { path: 'myassists', component: MyassistsComponent, canActivate: [AuthGuard,AdminCheck]},
  { path: 'usermanual', component: UsermanualComponent},
  { path: 'user/:userId', component: UserComponent, canActivate: [AuthGuard,AdminCheck]},

  { path: 'premium', component: PremiumComponent},
  { path: '', redirectTo: 'home',  pathMatch: 'full', },
  
  { path: 'contact', component: ContactComponent },
  
  { path: '**', component: NotFoundpageComponent } 











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
