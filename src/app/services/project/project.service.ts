import { Injectable } from '@angular/core';
import { ApiResponse } from '../../core/models/api.responses/api.response.model';
import { Observable, map } from 'rxjs';
import { Project } from '../../core/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiURL = `${environment.apiBaseURL}/Project`;

  constructor(private http: HttpClient) { }

  // Fetch all projects
  getAllProjects(): Observable<Project[]> {
    return this.http.get<ApiResponse<Project[]>>(this.apiURL)
      .pipe(map(res => res.data));
  }

  // Fetch a single project by ID
  getProjectById(projectID: number): Observable<Project> {
    return this.http.get<ApiResponse<Project>>(`${this.apiURL}/${projectID}`)
      .pipe(map(res => res.data));
  }

  // Create a new project
  createProject(project: Partial<Project>): Observable<Project> {
    return this.http.post<ApiResponse<Project>>(this.apiURL, project)
      .pipe(map(res => res.data));
  }

  // Update an existing project
  updateProject(projectID: number, project: Partial<Project>): Observable<Project> {
    return this.http.put<ApiResponse<Project>>(`${this.apiURL}/${projectID}`, project)
      .pipe(map(res => res.data));
  }

  // Soft-delete a project
  deleteProject(projectID: number): Observable<void> {
    return this.http.delete<ApiResponse<void>>(`${this.apiURL}/${projectID}`)
      .pipe(map(res => res.data));
  }
}
