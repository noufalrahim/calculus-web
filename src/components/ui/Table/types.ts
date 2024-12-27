export interface Column<T> {
    id: keyof T;
    title: string;
}

export interface TableComponentProps<T> {
    columns: Column<T>[]; 
    data: T[];
    handleOpenModal: () => void;
}