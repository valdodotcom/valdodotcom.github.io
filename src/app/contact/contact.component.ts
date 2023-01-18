import { Component, OnInit } from '@angular/core';
import { Contact } from '../types/Contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private ContactService: ContactService) { }

  contacts: Contact[] = []


  ngOnInit(): void {
    this.contacts = this.ContactService.getContacts()
  }

}
