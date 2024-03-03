
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundpageComponent } from './not-foundpage/not-foundpage.component';
import { UserLoginComponent } from './UserLogin/user-login/user-login.component';
import { SingUpUserComponent } from './Singup/sing-up-user/sing-up-user.component';
import { HomeComponentComponent } from './Home/home-component/home-component.component';
import { MyeventsComponent } from './myevents/myevents.component'; 

export const routes: Routes = [


  { path: 'singup', component: SingUpUserComponent }, 
  { path: 'login', component: UserLoginComponent }, 
  { path: 'home', component: HomeComponentComponent},
  { path: 'miseventos', component: MyeventsComponent },
  
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
