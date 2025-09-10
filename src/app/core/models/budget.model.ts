export interface BudgetPlan {
    // Required fields
    planID: number;
    year: number;
    budgetAllocated: number;
    hoursPlanned: number;
    cost: number;
    project: string;          // Descriptive name
    employeeName: string;     // Descriptive name
    month: string;            // Descriptive name
    status: string;           // Descriptive name
    description?: string;     // Previously comments, optional

    // Optional / Foreign Key fields
    projectID?: number;
    employeeID?: number;
    monthID?: number;
    statusID?: number;

    // Optional / Tracking fields
    comments?: string;
    createdBy?: number;
    createdAt?: string;
    updatedBy?: number;
    updatedAt?: string;
    isDeleted?: boolean;
}
