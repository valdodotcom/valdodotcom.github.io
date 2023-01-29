import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillsService } from './skills.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SkillsComponent],
  providers: [SkillsService],
  imports: [CommonModule, FontAwesomeModule],
  exports: [SkillsComponent]
})
export class SkillsModule { }
