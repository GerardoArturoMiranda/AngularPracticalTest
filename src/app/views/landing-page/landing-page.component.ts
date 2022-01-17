import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from 'src/app/api.service';
import { Idea } from 'src/app/models/api/idea.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  ideas : Idea[];
  constructor(public auth: AuthService, private api: ApiService) {
    this.ideas = [];
   }

  ngOnInit(): void {
    this.api.getIdeas("").subscribe((resp) => {
      console.log(resp)
      this.ideas = resp
    });
  }

}
