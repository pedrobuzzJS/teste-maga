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
import { create } from "domain";
import MSelect from "@/components/Inputs/Select/Select";

export default function Contatos() {
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
		{ field: "tipo", header: "Tipo", description: "Tipo" },
		{ field: "descricao", header: "Descrição", description: "Descrição" },
		{ field: "pessoa.id", header: "Pessoa", description: "Pessoa" },
		{
			field: "actions",
			header: "Ações",
			description: "Ações",
			body: DELL
		}
	]);
	const [pessoasOptions, setPessoasOptions] = useState();

	const [data, setData] = useState();

	const { clearFormValue, handleSubmit } = useForm();

	const save = async (form: unknown) => {
		if (formUpdate.id && disabled) return setOpenModal(false);

		if (formUpdate.id) {
			await api.put("contato", form);
			setFormUpdate({});
			fetchData();
			setOpenModal(false);
			return;
		}

		await api.post("contato", form);
		fetchData();
		setFormUpdate({});
		setOpenModal(false);
	};

	function create() {
		clearFormValue();
		setFormUpdate({});
		setDisabled(false);
		setOpenModal(true);
	}

	async function getPessoas() {
		const { data: fetchedData } = await api.get("/pessoa");
		setPessoasOptions(
			fetchedData.map((item) => ({ label: item.nome, value: item.id }))
		);
	}

	function see(id: number) {
		setDisabled(true);
		open(id);
	}

	function update(id: number) {
		setDisabled(false);
		open(id);
	}

	async function open(id: number) {
		const response = await api.get(`contato/${id}`);
		setFormUpdate(response.data);
		setOpenModal(true);
		return response.data;
	}

	const fetchData = async () => {
		setOpenModal(false);
		const { data: fetchedData } = await api.get("/contato");
		setData(fetchedData);
	};

	async function remove(id: number) {
		await api.delete(`contato/${id}`);
		fetchData();
	}

	useEffect(() => {
		fetchData();
		getPessoas();
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
				<SesButton
					label="Cadastrar"
					onClick={create}
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
				<Form id="contatoForm">
					<Input
						name={"id"}
						label={"Cod"}
						placeholder={"Código"}
						col={4}
						disabled
						initialData={formUpdate.id}
					/>
					<MSelect
						name={"tipo"}
						label={"Tipo"}
						placeholder={"Tipo"}
						col={4}
						initialData={formUpdate.tipo}
						disabled={disabled}
						multiple={false}
						options={[
							{ label: "Email", value: 0 },
							{ label: "Telefone", value: 1 }
						]}
					/>
					<Input
						name={"descricao"}
						label={"Descrição"}
						placeholder={"Descrição"}
						col={4}
						initialData={formUpdate.descricao}
						disabled={disabled}
					/>
					<MSelect
						name={"pessoa.id"}
						label={"Pessoa"}
						placeholder={"Pessoa"}
						col={12}
						initialData={formUpdate.pessoa?.id}
						disabled={disabled}
						options={pessoasOptions}
					/>
				</Form>
			</Modal>
		</>
	);
}
