import { PageMeta } from "@/components/shared/Utils";

import { About, Blog, Terms } from "./_parts";

export default function Page() {
	return (
		<main>
			<PageMeta title="Home" />
			<About />
			<Blog />
			<Terms />
		</main>
	);
}
