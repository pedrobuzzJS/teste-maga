"use client";

import { PropsWithChildren } from "react";
import styles from "./_grid.module.scss";

export type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Spacing = "sm" | "md" | "lg";
export type Justify = "start" | "center" | "end" | "space-between";
export type Direction = "column" | "row";
export type AlignItens = "strech" | "center" | "start" | "end";

export interface sGridProps extends PropsWithChildren {
	spacing?: Spacing;
	height?: number;
	justify?: Justify;
	direction?: Direction;
	alignItems?: AlignItens;
	padding?: number;
}

export default function Grid({
	children,
	height,
	justify,
	alignItems = "center",
	...props
}: sGridProps) {
	return (
		<div
			className={`${styles.gridContainer}`}
			{...props}
			style={{
				minHeight: `${height}px`,
				justifyContent: justify,
				alignItems: `${alignItems}`
			}}
		>
			{children}
		</div>
	);
}
