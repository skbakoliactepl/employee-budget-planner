export interface Employee {
    id: number;
    name: string;
    position: string;
    department: string;
    email: string;
    createdBy?: number;
    updatedBy?: number;
    createdAt: Date;
    updatedAt: Date;
}
