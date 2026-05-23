export interface TableColumn {

    column_name?: string;

    Field?: string;

    name?: string;

    data_type?: string;

    Type?: string;

    type?: string;
}

export interface DatabaseTable {

    table: string;

    columns: TableColumn[];
}
