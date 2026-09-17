import { Link, MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import { Footer, Header, Nav } from "@/components/shared/Sections";
import { Bg } from "@/components/shared/Utils";

import "@/_global/styles/global.sass";

export default function App() {
	return (
		<Router
			root={props => (
				<MetaProvider>
					<Link rel="icon" href="/favicon.png" />
					<Link rel="apple-touch-icon" href="/favicon.png" />
					<Link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.2.0/css/all.css" />
					<Link rel="preconnect" href="https://fonts.googleapis.com" />
					<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
					<Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@400&display=swap" />
					<Header />
					<Suspense>{ props.children }</Suspense>
					<Nav />
					<Footer />
					<Bg />
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
