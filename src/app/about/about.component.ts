import { Component, OnInit } from '@angular/core';
import { Tool } from '../types/Tool';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  constructor(private AboutService: AboutService) { }

  paragraphs: string[] = []

  tools: Tool[] = []

  ngOnInit(): void {
    this.paragraphs = this.AboutService.getParagraphs();
    this.tools = this.AboutService.getSkillSet();
  }

}
