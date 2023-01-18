import { Component, OnInit } from '@angular/core';
import { Contact } from '../types/Contact';
import { ContactService } from './contact.service';

// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private ContactService: ContactService) { }

  contacts: Contact[] = []

  // faEnvelope = faEnvelope;

  ngOnInit(): void {
    this.contacts = this.ContactService.getContacts()
  }

}
