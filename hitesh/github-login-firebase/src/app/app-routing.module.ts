import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import {SigninComponent} from "./pages/signin/signin.component"
import{SignupComponent} from "./pages/signup/signup.component";
import{HomeComponent}  from "./pages/home/home.component";


import { AngularFireAuthGuard,
         redirectUnauthorizedTo,
         redirectLoggedInTo }
    from '@angular/fire/auth-guard';

   const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
   const redirectLoggedInHome = () => redirectLoggedInTo(['/']);
   
const routes: Routes = [
  
    { path: 'signin',
      component: SigninComponent,
      canActivate: [AngularFireAuthGuard],
       data: { authGuardPipe: redirectLoggedInHome}
     },

   { path: 'signup',
    component: SignupComponent,
    
  },

  {
    path : '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
     data: { authGuardPipe: redirectUnauthorizedToLogin },
  },

  {
    path: "**",
    component: PagenotfoundComponent,
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
