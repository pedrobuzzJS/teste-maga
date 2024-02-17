import { PropsWithChildren, useCallback } from "react";
import style from "./_line_fluid.module.scss";
import { Cols } from "../GridStructure/Grid";

interface ILineFluidProps extends PropsWithChildren {
	col?: Cols;
	gap?: number;
}

export default function LineFluid({
	children,
	col = 12,
	...props
}: ILineFluidProps) {
	const getCol = useCallback(() => {
		return `col-${col}`;
	}, [col]);

	return (
		<div className={style[getCol()]} {...props}>
			{children}
		</div>
	);
}
