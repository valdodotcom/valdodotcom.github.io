import { Component, OnInit } from '@angular/core';
import { Project } from '../types/Project';
import { ProjectsService } from './projects.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  githubLogo = faGithub;
  playButton = faPlayCircle;

  constructor(private ProjectsService: ProjectsService) { }

  projects: Project[] = []

  ngOnInit(): void {
    this.projects = this.ProjectsService.getProjects()
  }

}
