import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SheetDescriptor, SpreadsheetModule } from "@progress/kendo-angular-spreadsheet";
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BudgetService } from '../../services/budget/budget.service';
import { BudgetPlan } from '../../core/models';
import { BudgetStatus, statusColors } from '../../core/enums/budget-status.enum';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SpreadsheetModule, CommonModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public sheets: SheetDescriptor[] = [];
  public projects: string[] = [];
  public employees: string[] = [];
  public months: string[] = [];
  public statuses: string[] = [];

  constructor(private budgetService: BudgetService) { }
  ngOnInit(): void {
    this.loadBudgetPlans();
  }

  private loadBudgetPlans() {
    this.budgetService.getAllBudgetPlans().subscribe({
      next: (plans) => {
        console.log("PLANS: ", plans);

        this.buildSheet(plans);
      },
      error: (err) => {
        console.error('Error fetching budget plans', err);
      }
    });
  }

  private buildSheet(plans: BudgetPlan[]) {
    this.sheets = [
      {
        name: 'Budget Plans',
        frozenRows: 1,
        columns: [
          { width: 160 }, { width: 160 }, { width: 100 }, { width: 150 },
          { width: 130 }, { width: 150 }, { width: 120 }, { width: 200 }
        ],
        rows: [
          {
            cells: [
              { value: 'Project Name', bold: true, background: '#E1EFFF' },
              { value: 'Employee', bold: true, background: '#E1EFFF' },
              { value: 'Month', bold: true, background: '#E1EFFF' },
              { value: 'Budget Allocated ($)', bold: true, background: '#E1EFFF' },
              { value: 'Hours Planned', bold: true, background: '#E1EFFF' },
              { value: 'Cost (Formula)', bold: true, background: '#E1EFFF' },
              { value: 'Status', bold: true, background: '#E1EFFF' },
              { value: 'Comments', bold: true, background: '#E1EFFF' }
            ]
          },
          ...plans.map((plan, index) => {
            const statusBg = statusColors[plan.status as BudgetStatus] || 'var(--white-color)';
            return {
              cells: [
                { value: plan.project },
                { value: plan.employeeName },
                { value: plan.month },
                { value: plan.budgetAllocated },
                { value: plan.hoursPlanned },
                { formula: `=D${index + 2}*E${index + 2}` },
                { value: plan.status, background: statusBg },
                { value: plan.description || '' }
              ]
            }
          })
        ]
      }
    ];
  }
}
