import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class SkillsService {

  constructor() { }

    getService() {
    return [
        {
          "name": "Web Development",
          "description": `With my knowledge in responsive web design using HTML, 
          CSS, and JavaScript, I am able to create visually stunning, user-friendly websites 
          that adapt seamlessly to any device or screen size, including mobile, tablet, and 
          laptop. I possess the ability to build custom web applications using the Angular 
          framework from the ground up, tailored to the unique needs of you and your customers, 
          ensuring their satisfaction with the final product.`,
          "icon": ""
        },

        {
          "name": "Mobile App Development",
          "description": `I am an experienced in using the Flutter framework to design, 
          develop and deploy visually appealing, modern, and user-friendly mobile 
          applications for both iOS and Android that deliver an exceptional user experience.`,
          "icon": ""
        },

        {
          "name": "Windows OS App Development",
          "description": `I also have experience utilizing the powerful Flutter framework 
          to develop highly functional and efficient applications that are specifically 
          tailored to solve problems and run seamlessly on the Windows Operating System.`,
          "icon": ""
        }
    ]
  }

}
