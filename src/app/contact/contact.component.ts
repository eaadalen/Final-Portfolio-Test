import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToHome(): void {
    this.router.navigate(['welcome']);
    console.log("here");
  }

  goToWork(): void {
    this.router.navigate(['main-view']);
    console.log("here");
  }

  goToAbout(): void {
    this.router.navigate(['about']);
  }

  sendMessage(): void {
    
  }

}
