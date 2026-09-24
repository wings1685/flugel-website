import { Show } from "solid-js";
import { Meta, Title } from "@solidjs/meta";
import { buildMeta } from "@/_global/lib/meta";
import type { DeepGuard } from "@/_global/types/types";
import type { YamlFiles, MetaProps } from "@/_global/lib/meta";

const globData = import.meta.glob('./**/_data/meta.yaml', { eager: true }) as YamlFiles;

export default function SiteMeta(props: DeepGuard<MetaProps>) {
	const meta = buildMeta({ ...props, globData });

	return (
		<>
			<Title>{ meta.title }</Title>
			<Meta name="description" content={ meta.description } />
			<Meta property="og:type" content="website" />
			<Meta property="og:title" content={ meta.title } />
			<Meta property="og:description" content={ meta.description } />
			<Meta property="og:site_name" content={ meta.title } />
			<Show when={ meta.ogImage }>
				<Meta property="og:image" content={ meta.ogImage } />
			</Show>
			<Meta name="twitter:card" content="summary_large_image" />
		</>
	)
}
