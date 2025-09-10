
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Status } from '../../core/models/status.model';
import { ApiResponse } from '../../core/models/api.responses/api.response.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private apiURL = `${environment.apiBaseURL}/Status`;

  constructor(private http: HttpClient) { }

  // Fetch all statuses
  getAllStatuses(): Observable<Status[]> {
    return this.http.get<ApiResponse<Status[]>>(this.apiURL)
      .pipe(map(res => res.data));
  }

  // Fetch a single status by ID
  getStatusById(statusID: number): Observable<Status> {
    return this.http.get<ApiResponse<Status>>(`${this.apiURL}/${statusID}`)
      .pipe(map(res => res.data));
  }

  // Create a new status
  createStatus(status: Partial<Status>): Observable<Status> {
    return this.http.post<ApiResponse<Status>>(this.apiURL, status)
      .pipe(map(res => res.data));
  }

  // Update an existing status
  updateStatus(statusID: number, status: Partial<Status>): Observable<Status> {
    return this.http.put<ApiResponse<Status>>(`${this.apiURL}/${statusID}`, status)
      .pipe(map(res => res.data));
  }

  // Soft-delete a status
  deleteStatus(statusID: number): Observable<void> {
    return this.http.delete<ApiResponse<void>>(`${this.apiURL}/${statusID}`)
      .pipe(map(res => res.data));
  }
}
