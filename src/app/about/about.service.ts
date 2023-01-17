import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class AboutService {

  constructor() { }

  getParagraphs() {
    return [
      ` I am a computer engineer with a keen interest in software development 
      seeking to bring your software-related ideas to life!`,

      `With a strong foundation 
      in computer engineering, I am able to think critically and creatively to 
      design, develop and implement software projects that are efficient, 
      secure, user-friendly and visually-appealing.`,

      `I am always eager to learn new technologies 
      and take on new challenges, and I look forward to working with you 
      to bring your ideas to fruition.`
    ]
  }

  getSkillSet() {
    return [  
      { "language": 'Angular', "level": 'Proficient' },  
      { "language": 'HTML5', "level": 'Proficient' },  
      { "language": 'CSS3', "level": 'Proficient' },  
      { "language": 'JavaScript', "level": 'Proficient' },
      { "language": 'TypeScript', "level": 'Competent' },    
      { "language": 'Flutter', "level": 'Proficient' },  
      { "language": 'Flask', "level": 'Competent' },  
      { "language": 'Python', "level": 'Proficient' },  
      { "language": 'Arduino', "level": 'Competent' },  
      { "language": 'C++', "level": 'Familiar' },
      { "language": 'C', "level": 'Familiar' },  
      { "language": 'Java', "level": 'Familiar' },
    ]
  }

  // getSkillSet() {
  //   return {
  //     group1: 
  //     [{"language": 'Angular', "level": 'Proficient'}, 
  //     { "language": 'HTML5', "level": 'Proficient' },
  //     { "language": 'CSS3', "level": 'Proficient' },
  //     { "language": 'Flutter', "level": 'Proficient' }],
      
  //     group2: 
  //     [{ "language": 'JavaScript', "level": 'Proficient' }, 
  //     { "language": 'TypeScript', "level": 'Competent' }, 
  //     { "language": 'Flask', "level": 'Competent' }, 
  //     { "language": 'Python', "level": 'Proficient' }],

  //     group3: 
  //     [{ "language": 'Arduino', "level": 'Competent' }, 
  //     { "language": 'C++', "level": 'Familiar' }, 
  //     { "language": 'C', "level": 'Familiar' }, 
  //     { "language": 'Java', "level": 'Familiar'}]
  //   }
  // }

}


