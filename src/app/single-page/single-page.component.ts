import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {
screenSize = 795;

  constructor() { }

  ngOnInit(): void {
  }

}
