"use client";

import { InputText, InputTextProps } from "primereact/inputtext";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "@/context/formContext";
import { Cols } from "@/components/GridSystem/GridStructure/Grid";
import InputWraper from "../InputWraper/InputWraper";

interface IInputTextProps extends InputTextProps {
	name: string;
	id?: string;
	label: string;
	placeholder?: string;
	initialData?: any;
	col?: Cols;
	notSet?: boolean;
}

export default function Input({
	name,
	label,
	initialData,
	col = 2,
	notSet = false,
	...props
}: IInputTextProps) {
	const [inputValue, setInputValue] = useState(initialData);

	const { setFormFieldValue } = useForm();

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (notSet) return;
		setFormFieldValue({
			name: inputRef.current?.name,
			value: inputValue
		});
	}, [inputValue, setFormFieldValue]);

	const handleOnChange = useCallback(
		(e: React.FormEvent<HTMLInputElement>) => {
			return setInputValue(e.currentTarget.value);
		},
		[]
	);

	return (
		<InputWraper label={label} name={name} col={col}>
			<InputText
				ref={inputRef}
				name={name}
				id={name}
				onChange={handleOnChange}
				style={{
					width: "100%"
				}}
				value={inputValue}
				{...props}
			/>
		</InputWraper>
	);
}
