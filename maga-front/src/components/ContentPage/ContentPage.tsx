"use client";

import { PropsWithChildren } from "react";
import styles from "./_contentPage.module.scss";

interface IContentPageProps extends PropsWithChildren {
	superOpenSideBar: boolean;
	isOpen?: boolean;
}

export default function ContentPage({
	superOpenSideBar,
	children
}: IContentPageProps) {
	return (
		<div
			className={`${styles.content} ${
				superOpenSideBar ? styles.open : styles.content
			}`}
			style={{
				position: "relative",
				padding: "5px"
				// height: "100%",
				// width: "100%"
			}}
		>
			{children}
		</div>
	);
}
