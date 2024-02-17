export interface LinkMenu {
	id: number;
	name: string;
	parameters?: string;
	route: string;
	icon: string;
	parent_id?: number;
	childrens?: LinkMenu[];
	component?: string;
	has_childrens: boolean;
	order?: number;
	disabled: boolean;
	status_id?: number;
	created_at?: Date;
	updated_at?: Date;
}
