import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {

  public getScreenWidth: any;
  public getScreenHeight: any;
  showDropdown: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  isShowing: boolean = false;

  toggleBar() {
    this.isShowing = !this.isShowing;
  }

}
