"use client";

import Form from "@/components/Form/Form";
import Grid from "@/components/GridSystem/GridStructure/Grid";
import SesButton from "@/components/Inputs/Button/SesButton";
import SInputMak from "@/components/Inputs/InputMaks/InputMask";
import Input from "@/components/Inputs/InputText/Input";
import { Modal } from "@/components/Modal/Modal";
import { useEffect, useState } from "react";
import { useForm } from "@/context/formContext";
import DataGrid, { IColumnProps } from "@/components/DataGrid/DataGrid";
import api from "@/services/api";
import { Button } from "primereact/button";

export default function Pessoas() {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [formUpdate, setFormUpdate] = useState<any>({});
	const [disabled, setDisabled] = useState(false);

	const DELL = (row: any) => {
		return (
			<Grid height={25} justify="end" gap={20}>
				<SesButton
					icon="pi pi-search"
					onClick={() => see(row.id)}
					style={{
						margin: "15px",
						padding: "5px"
					}}
				/>
				<SesButton
					icon="pi pi-save"
					onClick={() => update(row.id)}
					severity="help"
					style={{
						margin: "15px",
						padding: "5px"
					}}
				/>
				<SesButton
					icon="pi pi-trash"
					onClick={() => remove(row.id)}
					severity="danger"
					style={{
						margin: "15px",
						padding: "5px"
					}}
				/>
			</Grid>
		);
	};

	const [columns] = useState<IColumnProps[]>([
		{ isKey: true, field: "id", header: "ID", description: "id" },
		{ field: "nome", header: "Nome", description: "Nome" },
		{ field: "cpf", header: "CPF", description: "CPF" },
		{
			field: "actions",
			header: "Ações",
			description: "Ações",
			body: DELL
		}
	]);
	const [data, setData] = useState();

	const { clearFormValue, handleSubmit } = useForm();

	const save = async (form: unknown) => {
		if (formUpdate.id && disabled) return setOpenModal(false);

		if (formUpdate.id) {
			await api.put(`pessoa`, form);
			fetchData();
			setOpenModal(false);
			return;
		}

		await api.post("pessoa", form);
		fetchData();
		setOpenModal(false);
	};

	function see(id: number) {
		setDisabled(true);
		open(id);
	}

	function update(id: number) {
		setDisabled(false);
		open(id);
	}

	async function open(id: number) {
		const response = await api.get(`pessoa/${id}`);
		setFormUpdate(response.data);
		setOpenModal(true);
		return response.data;
	}

	const fetchData = async () => {
		setOpenModal(false);
		clearFormValue();
		const { data: fetchedData } = await api.get("/pessoa");
		setData(fetchedData);
	};

	async function remove(id: number) {
		await api.delete(`pessoa/${id}`);
		fetchData();
	}

	useEffect(() => {
		fetchData();
	}, []);

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
				severity="help"
				onClick={() => handleSubmit(save)}
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
					notSet
				/>
				<SesButton
					onClick={fetchData}
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
				onHide={() => {
					clearFormValue();
					setOpenModal(false);
				}}
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
						initialData={formUpdate.id}
					/>
					<Input
						name={"nome"}
						label={"Nome"}
						placeholder={"Nome"}
						col={4}
						initialData={formUpdate.nome}
						disabled={disabled}
					/>
					<SInputMak
						name={"cpf"}
						placeholder={"___.___.___-__"}
						label={"CPF"}
						mask={"999.999.999-99"}
						col={4}
						initialData={formUpdate.cpf}
						disabled={disabled}
					/>
				</Form>
			</Modal>
		</>
	);
}
