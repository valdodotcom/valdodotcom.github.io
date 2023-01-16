import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class ContactService {

  constructor() { }

  getContacts() {
    return [
      {
        "name": "Email",
        "address": "valdoato@gmail.com",
        "icon": "link"
      },
      {
        "name": "Address",
        "address": "Accra, Ghana",
        "icon": "link"
      },
      {
        "name": "Twitter",
        "address": "valdodotcom",
        "icon": "link"
      },
      {
        "name": "LinkedIn",
        "address": "linkedin.com",
        "icon": "link"
      },
      {
        "name": "GitHub",
        "address": "github.com",
        "icon": "link"
      },
      {
        "name": "Codewars",
        "address": "codewars.com",
        "icon": "link"
      },
    ]
  }
}
