import { Employee } from './employee.model';

export interface Project {
    id: number;
    projectName: string;
    description?: string;
    startDate: Date;
    endDate?: Date;
    employees?: Employee[]; // optional relation
    createdAt: Date;
    updatedAt: Date;
}