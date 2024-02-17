"use client";

import dot from "dot-object";
import { delayAndRun } from "@/helpers/functions";
import React, {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useState
} from "react";
import collect from "collect.js";
interface inputField {
	name: any;
	ref?: any;
	value?: any;
}
interface IFormProps {
	id?: unknown;
	formValues: {};
	handleSubmit?: (callBack?: () => void) => void;
	clearFormValue?: () => void;
	setFormFieldValue: ({ name, value }: inputField) => void;
	watch: () => void;
}

interface FormWithChildren extends PropsWithChildren {}

const FormContext = createContext<IFormProps>({} as IFormProps);

export const FormProvider: React.FC<FormWithChildren> = ({ children }) => {
	const [formValues, setFormValues] = useState<object>([]);

	let form: any;
	let fields: any[] = [];

	const setFormFieldValue = ({ name, value }: inputField) => {
		delayAndRun(() => {
			form = {
				...form,
				[name]: value
			};
		}, 1000);
		if (!fields.includes(name)) fields.push(name);
	};

	const handleSubmit = async (callBack?: () => void) => {
		const data = dot.object(form);
		if (callBack) callBack();
		console.log(data);
		return true;
	};

	const watch = () => {
		return null;
	};

	const clearFormValue = (callBack?: () => void) => {
		form = {};
		fields = [];
		setFormValues({});
		if (callBack) callBack();
		return true;
	};

	return (
		<FormContext.Provider
			value={{
				handleSubmit: handleSubmit,
				formValues: formValues,
				clearFormValue: clearFormValue,
				setFormFieldValue: setFormFieldValue,
				watch: watch
			}}
		>
			{children}
		</FormContext.Provider>
	);
};

export function useForm() {
	const context = useContext(FormContext);
	return context;
}
