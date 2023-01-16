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
      secure, user-friendly visually-appealing.`,

      `I am always eager to learn new technologies 
      and take on new challenges, and I look forward to working with you 
      to bring your ideas to fruition.`
    ]
  }

  getSkillSet() {
    return [
      "Angular",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Flutter",
      "Flask",
      "Python",
      "Arduino",
      "C++",
      "Java"
    ]
  }

  // getParagraphs() {
  //   return [
  //     {
  //       name: "clean code",
  //       author: "robert martin",
  //       image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
  //       amount: 700
  //     },
  
  //     {
  //       name: "the pragmatic programmer",
  //       author: "david thomas",
  //       image: "https://m.media-amazon.com/images/I/51IA4hT6jrL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  //       amount: 520
  //     },
  
  //     {
  //       name: "the art of computer programming",
  //       author: "donald knuth",
  //       image: "https://m.media-amazon.com/images/I/41YakMLJktL._SY429_BO1,204,203,200_.jpg",
  //       amount: 7500
  //     },
  
  //     {
  //       name: "introduction to algorithms",
  //       author: "thomas cormen",
  //       image: "https://m.media-amazon.com/images/I/41SNoh5ZhOL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  //       amount: 360
  //     }
  //   ]
  // }
}
