"use client";

import React, { useRef } from "react";
import { Button, ButtonProps } from "primereact/button";
import { Cols } from "@/components/GridSystem/GridStructure/Grid";
import LineFluid from "@/components/GridSystem/LineFluid/LineFluid";

interface IButtonProps extends ButtonProps {
	className?: string;
	col?: Cols;
	padding?: number;
	can?: string[];
}

export default function SesButton({ col, label, ...props }: IButtonProps) {
	const buttonRef = useRef(null);

	if (col)
		return (
			<LineFluid col={col}>
				<Button
					ref={buttonRef}
					label={label}
					style={{
						width: "100%",
						maxWidth: "",
						height: "100%",
						maxHeight: "30px",
						whiteSpace: "nowrap",
						padding: "15px",
						textAlign: "center"
					}}
					{...props}
				/>
			</LineFluid>
		);

	return (
		<Button
			ref={buttonRef}
			label={label}
			loading={false}
			style={{
				maxWidth: "100%",
				height: "100%",
				maxHeight: "30px",
				whiteSpace: "nowrap",
				padding: "10px"
			}}
			{...props}
		/>
	);
}
