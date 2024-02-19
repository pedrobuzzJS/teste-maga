import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import styles from "./page.module.scss";
import ContentLayout from "@/components/ContentLayout/ContenxtLayout";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { PrimeReactProvider } from "primereact/api";
import { FormProvider } from "@/context/formContext";
// import { Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Teste Magazord",
	description: "Feito por Pedro Artur Buzzi Pereira"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
				<main className={`${styles.main}`}>
					<PrimeReactProvider>
						<ContentLayout>
							<FormProvider>{children}</FormProvider>
						</ContentLayout>
					</PrimeReactProvider>
				</main>
			</body>
		</html>
	);
}
