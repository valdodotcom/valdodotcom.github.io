import { Component, OnInit } from '@angular/core';
import { Project } from '../types/Project';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private ProjectsService: ProjectsService) { }

  projects: Project[] = []

  ngOnInit(): void {
    this.projects = this.ProjectsService.getProjects()
  }

}
