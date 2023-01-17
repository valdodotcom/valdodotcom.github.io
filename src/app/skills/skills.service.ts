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
          "description": `I can create responsive websites and custom web applications using 
          HTML, CSS, JavaScript, and Angular, that adapt to any device and are tailored to 
          the unique needs of you and your customers, with a focus on user-friendliness 
          and visual appeal.`,
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
