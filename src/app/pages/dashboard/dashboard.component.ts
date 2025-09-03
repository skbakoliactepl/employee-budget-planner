import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SheetDescriptor, SpreadsheetModule } from "@progress/kendo-angular-spreadsheet";
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SpreadsheetModule, CommonModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public sheets: SheetDescriptor[] = [
    {
      name: "Budget Planner",
      rows: [
        {
          cells: [
            { value: "Project Name", bold: true, background: "#E1EFFF" },
            { value: "Employee Name", bold: true, background: "#E1EFFF" },
            { value: "Month", bold: true, background: "#E1EFFF" },
            { value: "Budget Allocated ($)", bold: true, background: "#E1EFFF" },
            { value: "Hours Planned", bold: true, background: "#E1EFFF" },
            { value: "Cost (Formula)", bold: true, background: "#E1EFFF" },
            { value: "Status", bold: true, background: "#E1EFFF" },
            { value: "Comments", bold: true, background: "#E1EFFF" },
          ],
        },
        {
          cells: [
            { value: "Project Alpha" },
            { value: "Rishab Singh" },
            { value: "Jan" },
            { value: 5000 },
            { value: 120 },
            { formula: "=D2*E2" },
            { value: "Planned" },
            { value: "Initial allocation" },
          ],
        },
        {
          cells: [
            { value: "Project Beta" },
            { value: "Anjali Sharma" },
            { value: "Feb" },
            { value: 7000 },
            { value: 150 },
            { formula: "=D3*E3" },
            { value: "Approved" },
            { value: "Confirmed by manager" },
          ],
        },
      ],
      frozenRows: 1,
      columns: [
        { width: 160 },
        { width: 160 },
        { width: 100 },
        { width: 150 },
        { width: 130 },
        { width: 150 },
        { width: 120 },
        { width: 200 },
      ],
    },
    {
      name: "Sheet1",
    },
  ];

  // In real app → fetch from API
  public projects = ["Project Alpha", "Project Beta", "Project Gamma"];
  public employees = ["Rishab Singh", "Saurabh Bakolia", "John Doe"];
  public months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  public statuses = ["Planned", "Approved", "Over Budget"];
}
