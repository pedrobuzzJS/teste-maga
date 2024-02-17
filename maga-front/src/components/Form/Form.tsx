import Grid from "../GridSystem/GridStructure/Grid";
import { PropsWithChildren } from "react";

interface IFormProps extends PropsWithChildren {
	id: unknown;
}

export default function Form({ children }: IFormProps) {
	if (children) {
		return <Grid>{children}</Grid>;
	}
	return <></>;
}
