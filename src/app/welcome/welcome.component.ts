import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToAbout(): void {
    this.router.navigate(['about']);
    console.log("here");
  }

  goToProjects(): void {
    this.router.navigate(['main-view']);
  }

  goToContact(): void {
    this.router.navigate(['contact']);
  }
}
