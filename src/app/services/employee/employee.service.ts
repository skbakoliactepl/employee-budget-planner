import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment.prod';
import { Observable } from 'rxjs';
import { Employee } from '../../core/models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiURL = `${environment.apiBaseURL}/Employee`

  constructor(private http: HttpClient) { }
  // ✅ Fetch all employees
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL);
  }

  // ✅ Fetch single employee by ID
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiURL}/${id}`);
  }

  // ✅ Create new employee
  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL, employee);
  }

  // ✅ Update employee
  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiURL}/${id}`, employee);
  }

  // ✅ Delete employee
  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
