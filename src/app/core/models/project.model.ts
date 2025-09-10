import { Employee } from './employee.model';

export interface Project {
    projectID: number;              // matches backend
    projectName: string;
    description?: string;
    startDate: string;              // use string to match backend ISO date, can parse to Date in components if needed
    endDate?: string;               // optional
    employees?: Employee[];         // optional relation
    createdBy: number;
    createdAt: string;              // ISO string from backend
    updatedBy: number;
    updatedAt: string;              // ISO string from backend
    isDeleted: boolean;
}
