import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    LandingPageComponent,
    NavbarComponent,
    CardComponent,
    LogoutButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-v04r1hw8.us.auth0.com',
      clientId: 'VAEal2B1uzXTvHOeaKxuQROOiCD1mvDH'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
