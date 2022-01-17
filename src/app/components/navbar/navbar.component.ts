import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  navbarResponsive: boolean;

  constructor(public auth: AuthService, public breakpointObserver: BreakpointObserver) { 
    this.navbarResponsive = true
  }

  ngOnInit(): void {
    this.breakpointObserver
        .observe(['(min-width: 850px)'])
        .subscribe((state: BreakpointState) => {
          if(state.matches){
            this.navbarResponsive = true;
          } else {
            this.navbarResponsive = false;
          }
        });
  }

}
