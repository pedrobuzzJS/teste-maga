"use client";

import React, { HTMLAttributes, ReactNode, useState } from "react";
import styles from "./_sideBar.module.scss";
// import ActiveLink from "@/components/SesActiveLink/ActiveLink";
import ContentPage from "@/components/ContentPage/ContentPage";
import { delayAndRun } from "@/helpers/functions";
import ActiveLink from "@/components/SesActiveLink/ActiveLink";

interface SideBarProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	isSideBarOpen?: boolean;
	// toggle?: () => void;
	// superOpenIt?: () => boolean;
}

export default function SideBar({ children }: SideBarProps) {
	const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
	const [superOpenSideBar, setSuperOpenSideBar] = useState<boolean>(false);

	const toggleSideBar = () => {
		delayAndRun(() => {
			setSuperOpenSideBar(!superOpenSideBar);
			setIsSideBarOpen(!superOpenSideBar);
		}, 100);
	};

	const handleSideBar = (open: boolean) => {
		if (superOpenSideBar === true) {
			return;
		}
		delayAndRun(() => {
			setIsSideBarOpen(open);
		}, 200);
	};

	// const { signOut } = useAuth();

	// const LinksTratados: LinkMenu[] = [];

	// const buildChildrenLinks = (linkPai: LinkMenu, linkList: LinkMenu[]) => {
	// 	const indexLinkPai = linkList.findIndex(
	// 		(link) => link.parent_id === linkPai.id
	// 	);
	// 	const linkFilhosRetorno: LinkMenu[] = [];
	// 	if (indexLinkPai !== 1) {
	// 		linkList.forEach((link, index) => {
	// 			if (link.parent_id === linkPai.id) {
	// 				link.childrens = buildChildrenLinks(link, linkList);
	// 				linkFilhosRetorno.push(link);
	// 			}
	// 		});
	// 	}
	// 	return linkFilhosRetorno;
	// };

	// data?.forEach((link, index) => {
	// 	link.childrens = buildChildrenLinks(link, data);
	// 	LinksTratados.push(link);
	// });

	// LinksTratados = LinksTratados.filter((link) => link.parent_id === null);

	return (
		<>
			<aside
				className={`${styles.sideBar} ${
					isSideBarOpen ? styles.open : styles.sideBar
				}`}
			>
				<div
					className={`${styles.sideBarHeader} ${
						isSideBarOpen ? styles.open : styles.sideBarHeader
					}`}
					onClick={toggleSideBar}
				>
					<i className="pi pi-bars" style={{ fontSize: "2rem" }}></i>
				</div>
				<div
					className={`${styles.list} ${
						isSideBarOpen ? styles.listOpen : ""
					}`}
					onMouseOver={() => handleSideBar(true)}
					onMouseLeave={() => handleSideBar(false)}
				></div>
				<div
					style={{
						position: "absolute",
						zIndex: 100,
						left: 0,
						top: "50px"
					}}
				>
					<ActiveLink
						href={"/pessoas"}
						children={
							<>
								<h1>Pessoas</h1>
							</>
						}
					/>
					<ActiveLink
						href={"/contatos"}
						children={
							<>
								<h1>Contatos</h1>
							</>
						}
					/>
				</div>
			</aside>
			<ContentPage
				superOpenSideBar={superOpenSideBar}
				isOpen={isSideBarOpen}
			>
				{children}
			</ContentPage>
		</>
	);
}
