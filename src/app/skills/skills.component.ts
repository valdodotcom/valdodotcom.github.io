import { Component, OnInit } from '@angular/core';
import { Skill } from '../types/Skill';
import { SkillsService } from './skills.service';
import { cardAnimation } from '../animations/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [cardAnimation()]
})
export class SkillsComponent implements OnInit {

  constructor(private SkillsService: SkillsService) { }

  services: Skill[] = []

  ngOnInit(): void {
    this.services = this.SkillsService.getService()
  }

}
