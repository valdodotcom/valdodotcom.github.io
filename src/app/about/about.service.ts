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
      { "language": 'Angular', "level": 'Proficient', "width": "95%" },
      { "language": 'HTML5', "level": 'Proficient', "width": "95%" },
      { "language": 'CSS (SCSS)', "level": 'Proficient', "width": "95%" },
      { "language": 'React', "level": 'Proficient', "width": "90%" },
      { "language": 'JavaScript', "level": 'Proficient', "width": "90%" },
      { "language": 'Python', "level": 'Proficient', "width": "90%" },
      { "language": 'Flutter', "level": 'Competent', "width": "70%" },
      { "language": 'Flask', "level": 'Competent', "width": "70%" },
      { "language": 'TypeScript', "level": 'Competent', "width": "70%" },
      { "language": 'Arduino', "level": 'Competent', "width": "70%" },
      { "language": 'C++', "level": 'Familiar', "width": "50%" },
      { "language": 'C', "level": 'Familiar', "width": "50%" },
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


