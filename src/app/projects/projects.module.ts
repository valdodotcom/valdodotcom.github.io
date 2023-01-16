import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';


@NgModule({
  declarations: [ProjectsComponent],
  providers: [ProjectsService],
  imports: [CommonModule],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
