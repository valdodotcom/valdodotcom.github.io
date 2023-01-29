import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ContactComponent],
  providers: [ContactService],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ContactComponent]
})
export class ContactModule { }
