import { Injectable } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faAddressCard, faGrinTongueWink } from '@fortawesome/free-regular-svg-icons';
import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';

// @Injectable({
//   providedIn: 'root'
// })
export class ContactService {

  faEnvelope = faEnvelope;

  constructor() { }

  getContacts() {
    return [
      {
        "name": "Email",
        "address": "valdoato@gmail.com",
        "icon": faEnvelope,
      },
      {
        "name": "Address",
        "address": "Accra, Ghana",
        "icon": faAddressCard,
      },
      {
        "name": "Twitter",
        "address": "valdodotcom",
        "icon": faGrinTongueWink,
      },
      {
        "name": "LinkedIn",
        "address": "linkedin.com",
        "icon": faLinkedin,
      },
      {
        "name": "GitHub",
        "address": "github.com",
        "icon": faAirFreshener,
      },
      {
        "name": "Codewars",
        "address": "codewars.com",
        "icon": faEnvelope,
      },
    ]
  }
}
