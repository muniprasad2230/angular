import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CardComponent } from './card/card/card.component';
import{AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo }
  from '@angular/fire/auth-guard'


  const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
  const redirectLoggedInToHome = () => redirectLoggedInTo('/');

const routes: Routes = [

  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToHome}
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToHome}
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },

  { path: 'card', loadChildren: () => import('./card/card.module').then(m => m.CardModule) },

  { path: 'preview', loadChildren: () => import('./preview/preview.module').then(m => m.PreviewModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
