import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';


@NgModule({
  declarations: [ContactComponent],
  providers: [ContactService],
  imports: [CommonModule],
  exports: [ContactComponent]
})
export class ContactModule { }
