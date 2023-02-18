import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
  })

  export class CategoryFilterPipe implements PipeTransform {
    transform(projects: any[], category: string): any[] {
      if (!projects || !category) {
        return projects;
      }
      return projects.filter(project => project.category === category);
    }
  }