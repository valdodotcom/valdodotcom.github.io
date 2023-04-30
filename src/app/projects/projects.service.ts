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
        "stack": ["HTML", " CSS", " JS"],
        "description": `A webpage that displays a variety 
        of meals along with their corresponding recipes for easy access and reference.`,
        "images": ["https://drive.google.com/uc?export=view&id=1kl4ziCmbn7_FEXKnaedayvNarxz2hijq",
        "https://drive.google.com/uc?export=view&id=1iD_gj9yEshgTTOudQsOcqfQaU1EwUJIS",
        "https://drive.google.com/uc?export=view&id=1qmQ3UfjNEptgX7d2Ju1n1yNaF1qg6cam"
        ],
        "repo": "https://github.com/valdodotcom/my-cookbook",
        "demo": "https://codepen.io/valdodotcom/full/oNPYbpR"       
      },

      {
        "name": "Product Website",
        "category": "Web Development",
        "stack": ["React", " Firebase", " HTML", " CSS", " JS"],
        "description": `A website designed to promote and market decorative glass plaques
        for the brand Glassic Plaques.
        Customers can view their catalogue and also place an order for products using this site.`,
        "images": ["https://drive.google.com/uc?export=view&id=1zk0pUA2IdnIdEY8n5DfN1vCJrOBIrcUR",
        "https://drive.google.com/uc?export=view&id=1XRMNNbjF_vCspjpGufxECVR5RaDlTELL",
        "https://drive.google.com/uc?export=view&id=1S3eyqVsTH1vhGKSUWaZXGrQl3IR31wXA"],
        "repo": "https://github.com/valdodotcom/glassic-site/",
        "demo": "https://glassic-site.web.app/"  
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
        "https://drive.google.com/uc?export=view&id=1kge5J_cXSvd7Ny5OOux0u78Jweyc99bL",
        "https://drive.google.com/uc?export=view&id=1xNiP-ljBS7_o6kRF_3WEvDozrPyjcVdf"],
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
        "images": ["https://drive.google.com/uc?export=view&id=1opWpc58QB5a_kVnx3AV6CjyhBbsO--Px",
        "https://drive.google.com/uc?export=view&id=1nab1Jb1olTSwV4DoM3sSRa9wTiAQqy5Z",
        "https://drive.google.com/uc?export=view&id=1IcjD9u-Vhqy50bhhHgM34NbXFrVnnuSV"],
        "repo": "https://github.com/valdodotcom/COE356-VorTech",
        "demo": "link" 
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
        "name": "Github Gists",
        "category": "Problem Solving",
        "stack": ["JavaScript", " Python"],
        "description": `Follow the link to view my Github Gists where I keep scripts
        I have created for various purposes.`,
        "images": [
          'https://drive.google.com/uc?export=view&id=14kbxoB3ZZnJzkCm3a6wA_M86Xx50YjMY',
          'https://drive.google.com/uc?export=view&id=17vrFafeQlcy6SNRJqUOq2J2dYal8lGjj',
          'https://drive.google.com/uc?export=view&id=1ouqAVEa4vhDqoTdnukYVWZJbqIb78tgt'],
        "repo": "https://gist.github.com/valdodotcom/",
        "demo": "link" 
      },

      {
        "name": "Codewars",
        "category": "Problem Solving",
        "stack": ["JavaScript", " Python"],
        "description": `See more of my problem solving scripts on Codewars.`,
        "images": ["https://i.imgur.com/LKAcLYO.png"],
        "repo": "https://www.codewars.com/users/valdodotcom",
        "demo": "link" 
      }
    ]
  }
}
