import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';


@NgModule({
  declarations: [ContactComponent],
  providers: [ContactService],
  imports: [CommonModule],
  exports: [ContactComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactModule { }
