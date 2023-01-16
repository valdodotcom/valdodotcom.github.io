import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillsService } from './skills.service';

@NgModule({
  declarations: [SkillsComponent],
  providers: [SkillsService],
  imports: [CommonModule],
  exports: [SkillsComponent]
})
export class SkillsModule { }
