"use client";

import {
	InputMask,
	InputMaskChangeEvent,
	InputMaskProps
} from "primereact/inputmask";
import { useForm } from "@/context/formContext";
import { Cols } from "@/components/GridSystem/GridStructure/Grid";
import { useCallback, useEffect, useRef, useState } from "react";
import InputWraper from "../InputWraper/InputWraper";

interface IInputMaks extends InputMaskProps {
	name: string;
	col?: Cols;
	placeholder: string;
	label: string;
	mask: string;
	initialData?: any;
}

export default function SInputMak({
	name,
	mask,
	label,
	col = 2,
	initialData,
	...props
}: IInputMaks) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [inputValue, setInputValue] = useState<any>(initialData);

	const { setFormFieldValue } = useForm();

	const inputRef = useRef(null);

	useEffect(() => {
		setFormFieldValue({
			name: name,
			value: inputValue
		});
	}, [inputValue, name, setFormFieldValue]);

	const handleOnChange = useCallback((e: InputMaskChangeEvent) => {
		return setInputValue(e.target.value);
	}, []);

	return (
		<InputWraper label={label} name={name} col={col}>
			<InputMask
				id={name}
				name={name}
				ref={inputRef}
				value={inputValue}
				onChange={(e) => handleOnChange(e)}
				mask={mask}
				{...props}
				style={{
					width: "100%"
				}}
			/>
		</InputWraper>
	);
}
