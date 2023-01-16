import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutService } from './about.service';

@NgModule({
  declarations: [AboutComponent],
  providers: [AboutService],
  imports: [CommonModule],
  exports: [AboutComponent]
})
export class AboutModule { }
