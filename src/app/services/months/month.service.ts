import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../../core/models/api.responses/api.response.model';
import { Month } from '../../core/models/month.model';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonthService {
  private apiURL = `${environment.apiBaseURL}/Month`;

  constructor(private http: HttpClient) { }

  // Fetch all months
  getAllMonths(): Observable<Month[]> {
    return this.http.get<ApiResponse<Month[]>>(this.apiURL)
      .pipe(map(res => res.data));
  }

  // Fetch single month by ID
  getMonthById(monthID: number): Observable<Month> {
    return this.http.get<ApiResponse<Month>>(`${this.apiURL}/${monthID}`)
      .pipe(map(res => res.data));
  }

  // Create a new month (if backend allows)
  createMonth(month: Partial<Month>): Observable<Month> {
    return this.http.post<ApiResponse<Month>>(this.apiURL, month)
      .pipe(map(res => res.data));
  }

  // Update an existing month
  updateMonth(monthID: number, month: Partial<Month>): Observable<Month> {
    return this.http.put<ApiResponse<Month>>(`${this.apiURL}/${monthID}`, month)
      .pipe(map(res => res.data));
  }

  // Soft-delete a month
  deleteMonth(monthID: number): Observable<void> {
    return this.http.delete<ApiResponse<void>>(`${this.apiURL}/${monthID}`)
      .pipe(map(res => res.data));
  }
}
