export interface Month {
    monthID: number;
    monthName: string;
    createdBy: number;
    createdAt: string; // ISO string from backend
    updatedBy: number;
    updatedAt: string; // ISO string from backend
    isDeleted: boolean;
}