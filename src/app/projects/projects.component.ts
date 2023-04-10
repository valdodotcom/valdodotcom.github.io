import { Component, OnInit } from '@angular/core';
import { Project } from '../types/Project';
import { ProjectsService } from './projects.service';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { cardAnimationCategory } from '../animations/animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [cardAnimationCategory()]
})
export class ProjectsComponent implements OnInit {

  isImageLoaded = false;

  codeButton = faFolderOpen;
  playButton = faPlayCircle;
  rightButton = faChevronRight;
  leftButton = faChevronLeft;
  closeButton = faXmark;

  selectedProject: any;
  showPopup = false;
  currentImageIndex = 0;

  categoryFilter: string = '';
  shouldAnimate: boolean = false;

  setCategory(category: string) {
    this.categoryFilter = category;
    this.shouldAnimate = true;
  }

  onAnimationComplete(): void {
    this.shouldAnimate = false;
  }

  constructor(private ProjectsService: ProjectsService) { }

  projects: Project[] = []

  ngOnInit(): void {
    this.projects = this.ProjectsService.getProjects();
    AOS.init();
  }

}
