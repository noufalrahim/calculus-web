export interface Column<T> {
    id: keyof T;
    title: string;
}

export interface ColumnConfigurationProps<T> {
    columns: Column<T>[]; 
}