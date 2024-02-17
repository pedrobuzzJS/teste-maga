"use client";

import { PropsWithChildren } from "react";
import SideBar from "../Menu/SideBar/SideBar";

interface IContentLayoutProps extends PropsWithChildren {}

export default function ContentLayout({ children }: IContentLayoutProps) {
	return (
		<>
			<SideBar>{children}</SideBar>
		</>
	);
}
