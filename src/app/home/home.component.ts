import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initTyped();
  }
  
  private initTyped() {
    const typed = new Typed('.intro-text', {
      strings: ["Computer Engineer", "Front End Developer", "Full Stack Developer"],
      startDelay: 1000,
      backDelay: 1000,
      typeSpeed: 40,
      backSpeed: 80,
      loop: true,
    });
  }
}