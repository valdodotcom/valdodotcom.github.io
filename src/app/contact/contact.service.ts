import { faLinkedin, faTwitterSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';

export class ContactService {

  faEnvelope = faEnvelope;

  constructor() { }

  getContacts() {
    return [
      {
        "name": "Valdo Ato Abruquah",
        "address": "https://www.linkedin.com/in/valdo-ato-abruquah-64087b218/",
        "icon": faLinkedin,
      },
      {
        "name": "valdodotcom",
        "address": "https://github.com/valdodotcom",
        "icon": faGithub,
      },
      {
        "name": "@valdodotcom",
        "address": "https://twitter.com/valdodotcom",
        "icon": faTwitterSquare,
      },
      {
        "name": "Accra, Ghana",
        "address": "",
        "icon": faGlobeAfrica,
      },  
      {
        "name": "valdoato@gmail.com",
        "address": "",
        "icon": faEnvelope,
      },

    ]
  }
}
