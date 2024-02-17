"use client";

import Form from "@/components/Form/Form";
import Grid from "@/components/GridSystem/GridStructure/Grid";
import LineFluid from "@/components/GridSystem/LineFluid/LineFluid";
import SesButton from "@/components/Inputs/Button/SesButton";
import SInputMak from "@/components/Inputs/InputMaks/InputMask";
import Input from "@/components/Inputs/InputText/Input";
import { Modal } from "@/components/Modal/Modal";
import { useState } from "react";
import { useForm } from "@/context/formContext";

export default function Pessoas() {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [contatCount, setContactCount] = useState<[]>([1]);

	const { clearFormValue, handleSubmit } = useForm();

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
				onClick={() => handleSubmit(console.log("teste de callback"))}
				style={{
					height: "48px",
					marginTop: "-10px"
				}}
			/>
		</Grid>
	);

	return (
		<>
			<Grid alignItems="center">
				<Input
					name={"searchPersons"}
					label={"Perquisar Pessoas"}
					col={10}
				/>
				<SesButton
					label="Abrir Modal"
					onClick={() => setOpenModal(true)}
					disabled={false}
					className="p-button-success"
					col={2}
					style={{
						height: "48px",
						marginTop: "-10px",
						width: "100%"
					}}
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
