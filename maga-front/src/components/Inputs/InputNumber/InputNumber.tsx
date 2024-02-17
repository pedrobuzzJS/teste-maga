import {
	InputNumber,
	InputNumberChangeEvent,
	InputNumberProps
} from "primereact/inputnumber";
import InputWraper from "../InputWraper/InputWraper";
import { Cols } from "@/components/GridSystem/GridStructure/Grid";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "@/context/formContext";

interface IInputNumberProps extends InputNumberProps {
	name: string;
	id?: string;
	label: string;
	placeholder?: string;
	initialData?: object;
	col?: Cols;
}

export default function SesInputNumber({
	name,
	label,
	// initialData,
	col = 2,
	...props
}: IInputNumberProps) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [inputValue, setInputValue] = useState<any>("");

	const { setFormFieldValue } = useForm();

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		setFormFieldValue({
			name: name,
			value: inputValue
		});
	}, [inputValue, name, setFormFieldValue]);

	const handleOnChange = useCallback((e: InputNumberChangeEvent) => {
		return setInputValue(e.value);
	}, []);

	return (
		<InputWraper label={label} name={name} col={col}>
			<InputNumber
				id={name}
				name={name}
				inputRef={inputRef}
				value={inputValue}
				onChange={(e) => handleOnChange(e)}
				{...props}
				style={{
					width: "100%"
				}}
			/>
		</InputWraper>
	);
}
