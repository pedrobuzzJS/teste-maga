"use client";

import LineFluid from "@/components/GridSystem/LineFluid/LineFluid";
import { PropsWithChildren, useCallback, useState } from "react";
import "./_inputWraper.scss";
import { Cols } from "@/components/GridSystem/GridStructure/Grid";

interface IInputWraper extends PropsWithChildren {
	label: string;
	name: string;
	col?: Cols;
}

export default function InputWraper({
	name,
	label,
	col = 3,
	children
}: IInputWraper) {
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const handleInputFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleInputBlur = useCallback(() => {
		setIsFocused(false);
	}, []);

	return (
		<LineFluid col={col}>
			<div
				className={`${"inputContainer"} ${
					isFocused ? "inputFocus" : ""
				}`}
			>
				<div className={"formLabel"}>
					<label className="inputLabel" htmlFor={name}>
						<span className={"leftSpan"}>{label}</span>
					</label>
					<div className={"rightSpan"}></div>
				</div>
				<div
					className={"formField"}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
				>
					{children}
				</div>
			</div>
		</LineFluid>
	);
}
