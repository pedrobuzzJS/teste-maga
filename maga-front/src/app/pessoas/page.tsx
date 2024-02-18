"use client";

import Form from "@/components/Form/Form";
import Grid from "@/components/GridSystem/GridStructure/Grid";
import SesButton from "@/components/Inputs/Button/SesButton";
import SInputMak from "@/components/Inputs/InputMaks/InputMask";
import Input from "@/components/Inputs/InputText/Input";
import { Modal } from "@/components/Modal/Modal";
import { useState } from "react";
import { useForm } from "@/context/formContext";
import DataGrid, { IColumnProps } from "@/components/DataGrid/DataGrid";

export default function Pessoas() {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [columns] = useState<IColumnProps[]>([
		{ isKey: true, field: "id", header: "ID", description: "id" },
		{ field: "name", header: "Nome", description: "Nome" },
		{ field: "cpf", header: "CPF", description: "CPF" }
	]);
	const [data, setData] = useState();

	// const [contatCount, setContactCount] = useState<[]>([{}]);

	const { clearFormValue, handleSubmit, formValues } = useForm();

	const save = () => {
		console.log("formValues", formValues);
	};

	const reload = () => {
		setOpenModal(false);
		clearFormValue();
		return console.log("Recarregar");
	};

	const HEADER = (
		<Grid height={50}>
			<span>Ola</span>
		</Grid>
	);

	const FOOTER = (
		<Grid height={50} justify="end">
			<SesButton
				icon="pi pi-check"
				label="Confirmar"
				onClick={save}
				style={{
					height: "48px",
					marginTop: "-10px"
				}}
			/>
		</Grid>
	);

	return (
		<>
			<Grid alignItems="start" justify="start">
				<Input
					name={"searchPersons"}
					label={"Perquisar Pessoas"}
					col={11}
				/>
				<SesButton
					onClick={reload}
					disabled={false}
					icon="pi pi-search"
					className="p-button-success"
					col={1}
					style={{
						height: "48px",
						width: "100%"
					}}
				/>
				<SesButton
					label="Cadastrar"
					onClick={() => setOpenModal(true)}
					disabled={false}
					icon="pi pi-search"
					className="p-button-success"
					style={{
						padding: "10px"
					}}
				/>
				<DataGrid
					columns={columns}
					initialData={data}
					col={12}
					loading={false}
				/>
			</Grid>

			<Modal
				onHide={() => clearFormValue(setOpenModal(false))}
				visible={openModal}
				header={HEADER}
				footer={FOOTER}
			>
				<Form id="personForm">
					<Input
						name={"id"}
						label={"Cod"}
						placeholder={"Código"}
						col={4}
						disabled
					/>
					<Input
						name={"nome"}
						label={"Nome"}
						placeholder={"Nome"}
						col={4}
					/>
					<SInputMak
						name={"cpf"}
						placeholder={"___.___.___-__"}
						label={"CPF"}
						mask={"999.999.999-99"}
						col={4}
					/>
				</Form>
			</Modal>
		</>
	);
}
