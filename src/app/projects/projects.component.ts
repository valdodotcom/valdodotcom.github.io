import { Component, OnInit } from '@angular/core';
import { Project } from '../types/Project';
import { ProjectsService } from './projects.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  githubLogo = faGithub;
  playButton = faPlayCircle;
  rightButton = faChevronRight;
  leftButton = faChevronLeft;
  closeButton = faXmark;

  selectedProject: any;
  showPopup = false;
  currentImageIndex = 0;

  constructor(private ProjectsService: ProjectsService) { }

  projects: Project[] = []

  ngOnInit(): void {
    this.projects = this.ProjectsService.getProjects()
  }

}
