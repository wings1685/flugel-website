import { createMemo } from "solid-js";
import { Meta, Title } from "@solidjs/meta";

import { siteDescription, siteTitle } from "@/_global/lib/shared";

import type { DeepGuard } from "@/_global/types/types";

type Props = {
	title: string;
	description?: string;
};

export default function PageMeta(props: DeepGuard<Props>) {
	const title = createMemo(() => `${props.title} | ${siteTitle}`);
	const description = createMemo(() => props.description ?? siteDescription);

	return (
		<>
			<Title>{ title() }</Title>
			<Meta property="og:type" content="website" />
			<Meta property="og:title" content={ title() } />
			<Meta property="og:description" content={ description() } />
			<Meta property="og:site_name" content={ title() } />
			<Meta name="twitter:card" content="summary_large_image" />
			<Meta name="description" content={ description() } />
		</>
	)
}
