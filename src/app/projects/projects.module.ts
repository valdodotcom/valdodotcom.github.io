import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryFilterPipe } from './category-filter.pipe';

@NgModule({
  declarations: [ProjectsComponent, CategoryFilterPipe],
  providers: [ProjectsService],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
