import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class ProjectsService {

  constructor() { }

  getProjects() {
    return [
      {
        "name": "My Cookbook",
        "category": "Web Development",
        "stack": ["HTML", " CSS"],
        "description": `A webpage that displays a variety 
        of meals along with their corresponding recipes for easy access and reference.`,
        "images": ["https://drive.google.com/uc?export=view&id=1kl4ziCmbn7_FEXKnaedayvNarxz2hijq",
        "https://drive.google.com/uc?export=view&id=1iD_gj9yEshgTTOudQsOcqfQaU1EwUJIS",
        "https://drive.google.com/uc?export=view&id=1qmQ3UfjNEptgX7d2Ju1n1yNaF1qg6cam"
        ],
        "repo": "link",
        "demo": "https://codepen.io/valdodotcom/full/oNPYbpR"       
      },

      {
        "name": "Product Landing Page",
        "category": "Web Development",
        "stack": ["HTML", " CSS"],
        "description": `A webpage specifically designed to promote 
        and market a specific product or service.`,
        "images": ["https://drive.google.com/uc?export=view&id=127N6C2V1UcXpLnnDenbOqRxBV4h4ZP5S",
        "https://drive.google.com/uc?export=view&id=127N6C2V1UcXpLnnDenbOqRxBV4h4ZP5S",
        "https://drive.google.com/uc?export=view&id=16K9sOoh0Txu_nTKBpygbJh-SFiwCil-T"],
        "repo": "link",
        "demo": "https://codepen.io/valdodotcom/full/QWNzprK"  
      },

      {
        "name": "Survey Form",
        "category": "Web Development",
        "stack": ["HTML", " CSS"],
        "description": `A series of questions or statements 
        that are designed to gather specific data or feedback.`,
        "images": ["https://drive.google.com/uc?export=view&id=1b3M3ErplvQMcUV4kcTV9RnwIt-ucbADT",
        "https://drive.google.com/uc?export=view&id=127N6C2V1UcXpLnnDenbOqRxBV4h4ZP5S",
        "https://drive.google.com/uc?export=view&id=16K9sOoh0Txu_nTKBpygbJh-SFiwCil-T"],
        "repo": "link",
        "demo": "https://codepen.io/valdodotcom/full/MWyzzaN"  
      },

      {
        "name": "Tribute Page",
        "category": "Web Development",
        "stack": ["HTML", " CSS"],
        "description": `A webpage to honor or remember a person, group, or organization.`,
        "images": ["https://drive.google.com/uc?export=view&id=1dRCx6DtjuDJ2AICPVaWT7Vkcq8MI53Kx",
        "https://drive.google.com/uc?export=view&id=127N6C2V1UcXpLnnDenbOqRxBV4h4ZP5S",
        "https://drive.google.com/uc?export=view&id=16K9sOoh0Txu_nTKBpygbJh-SFiwCil-T"],
        "repo": "link",
        "demo": "link"
      },

      {
        "name": "My Portfolio (this website!)",
        "category": "Web Development",
        "stack": ["Angular", " HTML", " CSS", " TypeScript"],
        "description": `A web application that serves as a collection of projects, skills, and 
        experience showcasing abilities and qualifications to potential employers or clients.`,
        "images": ["https://drive.google.com/uc?export=view&id=1nS1zGP9LGNXoE4wIa2mGWIDgXIzSWvyV"],
        "repo": "https://github.com/valdodotcom/valdodotcom.github.io",
        "demo": "link"  
      },

      {
        "name": "digiTHEFT",
        "category": "Windows App Development",
        "stack": ["Flutter", " Flask", " Arduino"],
        "description": `An electronic anti-theft surveillance system designed for 
        libraries, which comprises both the necessary hardware for tagging and 
        identifying books, as well as the software for managing the detection 
        status of borrowed and returned books. The system also includes a 
        comprehensive database for efficient management of the library's inventory.`,
        "images": ["https://drive.google.com/uc?export=view&id=1tD905xCWe4BJ1zq1zKwF4l4le9WUeOHA",
        "https://drive.google.com/uc?export=view&id=127N6C2V1UcXpLnnDenbOqRxBV4h4ZP5S",
        "https://drive.google.com/uc?export=view&id=16K9sOoh0Txu_nTKBpygbJh-SFiwCil-T"],
        "repo": "https://github.com/direntwi/digiTHEFT",
        "demo": "link" 
      },

      {
        "name": "InstaShop",
        "category": "Mobile App Development",
        "stack": ["Flutter", " Flask"],
        "description": `A marketplace platform designed to empower 
        small-scale businesses and social media-based entrepreneurs to effectively 
        advertise and sell their products.`,
        "images": ["https://drive.google.com/uc?export=view&id=1nab1Jb1olTSwV4DoM3sSRa9wTiAQqy5Z",
        "https://drive.google.com/uc?export=view&id=127N6C2V1UcXpLnnDenbOqRxBV4h4ZP5S",
        "https://drive.google.com/uc?export=view&id=16K9sOoh0Txu_nTKBpygbJh-SFiwCil-T"],
        "repo": "https://github.com/valdodotcom/COE356-VorTech",
        "demo": "link" 
      },
      
      {
        "name": "JSON Difference Checker",
        "category": "Problem Solving",
        "stack": ["JavaScript"],
        "description": `A function that returns differences between two 
        arrays of objects, i.e. additions, removals, and changes in object status.`,
        "images": ["https://drive.google.com/uc?export=view&id=1jKgxoyOOuxuW35175dqoDMnS1emhgqvM",
        "https://drive.google.com/uc?export=view&id=127N6C2V1UcXpLnnDenbOqRxBV4h4ZP5S",
        "https://drive.google.com/uc?export=view&id=16K9sOoh0Txu_nTKBpygbJh-SFiwCil-T"],
        "repo": "https://github.com/valdodotcom/json_difference_checker",
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
        "images": ["https://drive.google.com/uc?export=view&id=1SmpHzo_7b-ReAtVZIhjUj3tqx-nGKQ2R",
        "https://drive.google.com/uc?export=view&id=127N6C2V1UcXpLnnDenbOqRxBV4h4ZP5S",
        "https://drive.google.com/uc?export=view&id=16K9sOoh0Txu_nTKBpygbJh-SFiwCil-T"],
        "repo": "https://github.com/valdodotcom/modbus-register-reader",
        "demo": "link" 
      },

      {
        "name": "More Problem Solving Projects",
        "category": "Problem Solving",
        "stack": ["JavaScript", " Python"],
        "description": `See more of my problem solving projects on Codewars.`,
        "images": ["https://i.imgur.com/LKAcLYO.png"],
        "repo": "link",
        "demo": "link" 
      }
    ]
  }
}
