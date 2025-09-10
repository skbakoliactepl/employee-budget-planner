export interface Status {
  statusID: number;
  statusName: string;
  createdBy: number;
  createdAt: string; // or Date if you want to parse it
  updatedBy: number;
  updatedAt: string; // or Date
  isDeleted: boolean;
}
