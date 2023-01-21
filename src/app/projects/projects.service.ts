import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class ProjectsService {

  constructor() { }

  getProjects() {
    return [
      {
        "name": "My Portfolio (this website!)",
        "category": "Web Development",
        "stack": ["Angular", "HTML", "CSS", "TypeScrript"],
        "description": `A web application that serves as a collection of projects, skills, and 
        experience showcasing abilities and qualifications to potential employers or clients.`,
        "image": "link",
        "repo": "link",
        "demo": "link"  
      },

      {
        "name": "Cook Book",
        "category": "Web Development",
        "stack": ["HTML", "CSS"],
        "description": `A straightforward webpage that displays a variety 
        of meals along with their corresponding recipes for easy access and reference.`,
        "image": "link",
        "repo": "link",
        "demo": "link"       
      },

      {
        "name": "Product Landing Page",
        "category": "Web Development",
        "stack": ["HTML", "CSS"],
        "description": `A webpage specifically designed to promote 
        and market a specific product or service.`,
        "image": "link",
        "repo": "link",
        "demo": "link"  
      },

      {
        "name": "Survey Form",
        "category": "Web Development",
        "stack": ["HTML", "CSS"],
        "description": `A series of questions or statements 
        that are designed to gather specific data or feedback.`,
        "image": "link",
        "repo": "link",
        "demo": "link"  
      },

      {
        "name": "Tribute Page",
        "category": "Web Development",
        "stack": ["HTML", "CSS"],
        "description": `A webpage to honor or remember a person, group, or organization.`,
        "image": "link",
        "repo": "link",
        "demo": "link"
      },

      {
        "name": "digiTHEFT",
        "category": "Windows OS Development",
        "stack": ["Flutter", "Flask", "Arduino"],
        "description": `An electronic anti-theft surveillance system designed for 
        libraries, which comprises both the necessary hardware for tagging and 
        identifying books, as well as the software for managing the detection 
        status of borrowed and returned books. The system also includes a 
        comprehensive database for efficient management of the library's inventory.`,
        "image": "link",
        "repo": "link",
        "demo": "link" 
      },

      {
        "name": "InstaShop",
        "category": "Mobile App Development",
        "stack": ["Flutter", "Flask"],
        "description": `A marketplace platform designed to empower 
        small-scale businesses and social media-based entrepreneurs to effectively 
        advertise and sell their products.`,
        "image": "link",
        "repo": "link",
        "demo": "link" 
      },
      
      {
        "name": "JSON Difference Checker",
        "category": "Problem Solving",
        "stack": ["JavaScript"],
        "description": `A function that returns differences between two 
        arrays of objects, i.e. additions, removals, and changes in object status.`,
        "image": "link",
        "repo": "link",
        "demo": "link" 
      },

      {
        "name": "Modbus Register Reader",
        "category": "Problem Solving",
        "stack": ["Python"],
        "description": `A script designed for a Modbus 
        device with unknown connection parameters, 
        i.e. baud rate, data bits, parity, and stop bits. It loops through all the 
        possible combinations of the parameters until the right match is found.`,
        "image": "link",
        "repo": "link",
        "demo": "link" 
      },

      {
        "name": "More Problem Solving Projects",
        "category": "Problem Solving",
        "stack": ["JavaScript", "Python"],
        "description": `Click on the link to see more of my problem solving projects 
        on Codewars.`,
        "image": "link",
        "repo": "link",
        "demo": "link" 
      }
    ]
  }
}
