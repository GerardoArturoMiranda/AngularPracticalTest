import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
