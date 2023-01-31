import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ProjectsComponent],
  providers: [ProjectsService],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
