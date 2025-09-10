import { Employee } from './employee.model';
import { Project } from './project.model';
import { BudgetPlan } from './budget.model';

export interface Report {
    id: number;
    title: string;
    createdBy: Employee;
    project?: Project;
    budget?: BudgetPlan;
    generatedAt: Date;
}
