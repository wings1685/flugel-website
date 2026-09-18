import { useLocation } from "@solidjs/router";
import { createMemo } from "solid-js";
import { useStore } from "@/_global/piquo";
import { Glass } from "./";
import "./Header.sass";

export default function Header() {
	const { navOpened, setNavOpened } = useStore('navOpened');

	const handleClick = (e?: Event) => {
		if (e) {
			e.preventDefault();
			setNavOpened(!navOpened());
		} else {
			setNavOpened(false);
		}
	};
	const page = createMemo(() => useLocation().pathname.replace(/\//g, '') || 'top');

	return (
		<header>
			<input type="checkbox" checked={ navOpened() } />
			<Glass as="a" mini isDark href="/" icon="home" onClick={ () => handleClick() } classList={ { active: page() === 'top' } }>
				<p>
					<span>Home</span>
				</p>
			</Glass>
			<Glass as="a" mini isDark href="/archives/" icon="folder" onClick={ () => handleClick() } classList={ { active: page() === 'archives' } }>
				<p>
					<span>Archives</span>
				</p>
			</Glass>
			<Glass as="a" mini isDark href="/types/" icon="code" onClick={ () => handleClick() } classList={ { active: page() === 'types' } }>
				<p>
					<span>Types</span>
				</p>
			</Glass>
			<Glass as="div" mini isDark id="btn_nav" onClick={ (e) => handleClick(e) }>
				<span></span>
			</Glass>
		</header>
	)
}
