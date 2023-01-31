import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, NgbModule],
  exports: [GalleryComponent]
})
export class GalleryModule { }
