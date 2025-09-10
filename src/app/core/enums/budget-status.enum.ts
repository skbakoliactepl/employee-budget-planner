// src/app/enums/budget-status.enum.ts


// Define Status Enum (PascalCase keys)
export enum BudgetStatus {
    Planned = 'Planned',
    Approved = 'Approved',
    OverBudget = 'Over Budget'
}
const getCssVar = (varName: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

export const statusColors: Record<BudgetStatus, string> = {
    [BudgetStatus.Planned]: getCssVar('--yellow-color'),
    [BudgetStatus.Approved]: getCssVar('--green-color'),
    [BudgetStatus.OverBudget]: getCssVar('--red-color')
};

