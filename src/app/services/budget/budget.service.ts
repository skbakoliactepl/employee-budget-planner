import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { BudgetPlan } from '../../core/models';
import { ApiResponse } from '../../core/models/api.responses/api.response.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiURL = `${environment.apiBaseURL}/BudgetPlan`;

  constructor(private http: HttpClient) { }

  // Fetch all budget plans
  getAllBudgetPlans(): Observable<BudgetPlan[]> {
    return this.http.get<ApiResponse<BudgetPlan[]>>(`${this.apiURL}`)
      .pipe(
        map(response => response.data)
      );
  }
}
