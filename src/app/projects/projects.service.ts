import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsUrl = 'https://portfolio-2d8b0-default-rtdb.firebaseio.com/.json';

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<any>(this.projectsUrl);
  }
}
