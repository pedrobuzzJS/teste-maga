"use client";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnProps } from "primereact/column";
import { Cols } from "../GridSystem/GridStructure/Grid";
import LineFluid from "../GridSystem/LineFluid/LineFluid";

export interface IGridProps {
	columns: IColumnProps[];
	initialData: any;
	col?: Cols;
	loading?: boolean;
	stripedRows?: boolean;
}

export interface IColumnProps extends ColumnProps {
	isKey?: boolean;
	description?: string;
}

export type ColumnOrder = "asc" | "desc" | "sort";

export default function DataGrid({
	columns,
	initialData,
	col = 12,
	loading,
	stripedRows = true,
	...props
}: IGridProps) {
	return (
		<LineFluid col={col}>
			<DataTable
				value={initialData}
				size="small"
				loading={loading}
				stripedRows={stripedRows}
				removableSort={true}
				{...props}
			>
				{columns.map((col, i) => (
					<Column
						key={i}
						field={col.field}
						header={col.header}
						{...col}
					/>
				))}
			</DataTable>
		</LineFluid>
	);
}
