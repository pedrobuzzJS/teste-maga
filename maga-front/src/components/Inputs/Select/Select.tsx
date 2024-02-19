"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import InputWraper from "../InputWraper/InputWraper";
import { useForm } from "@/context/formContext";
import { Dropdown, DropdownProps } from "primereact/dropdown";

interface ISelectProps extends DropdownProps {
	name: string;
	id?: string;
	label: string;
	placeholder?: string;
	initialData?: any;
	col?: Cols;
	notSet?: boolean;
}

export default function MSelect({
	name,
	label,
	initialData,
	col = 2,
	notSet = false,
	disabled,
	...props
}: ISelectProps) {
	const [inputValue, setInputValue] = useState(initialData);

	const { setFormFieldValue } = useForm();

	const inputRef = useRef(null);

	useEffect(() => {
		if (notSet) return;
		setFormFieldValue({
			name: name,
			value: inputValue
		});
	}, [inputValue, setFormFieldValue]);

	const handleOnChange = useCallback((e: MultiSelectChangeEvent) => {
		return setInputValue(e.target.value);
	}, []);

	return (
		<InputWraper label={label} name={name} col={col}>
			<Dropdown
				ref={inputRef}
				name={name}
				id={name}
				onChange={handleOnChange}
				style={{
					width: "100%"
				}}
				value={inputValue}
				disabled={disabled}
				multiple={false}
				{...props}
			/>
		</InputWraper>
	);
}
