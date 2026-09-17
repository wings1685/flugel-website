import { createSignal, onMount } from "solid-js";
import { getHighlightedCode } from "./_models/usePage";
import { codes as codesDeepGuard } from "./_models/codeDeepGuard";
import { codes as codesProps } from "./_models/codeProps";
import { codes as codesExclude } from "./_models/codeExclude";
import { unescapeTag } from "@/_global/lib/utils";
import { PageMeta } from "@/components/shared/Utils";
import { DeepGuard, Exclude, Props } from "./_parts";
import { Box, Glass } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";

export default function Page() {
	const [ typesCodeDeepGuard, setTypesCodeDeepGuard ] = createSignal<string>(codesDeepGuard.types);
	const [ glassCodeDeepGuard, setGlassCodeDeepGuard ] = createSignal<string>(codesDeepGuard.glass);

	const [ iconCodeProps, setIconCodeProps ] = createSignal<string>(codesProps.icon);
	const [ pageTitleCodeProps, setPageTitleCodeProps ] = createSignal<string>(codesProps.pageTitle);
	const [ typesCodeProps, setTypesCodeProps ] = createSignal<string>(codesProps.types);
	const [ groupCodeProps, setGroupCodeProps ] = createSignal<string>(codesProps.group);

	const [ glassCodeExclude, setGlassCodeExclude ] = createSignal<string>(codesExclude.glass);

	onMount(async () => {
		const typesDeepGuard = await getHighlightedCode(codesDeepGuard.types);
		setTypesCodeDeepGuard(typesDeepGuard);
		const glassDeepGuard = await getHighlightedCode(codesDeepGuard.glass);
		setGlassCodeDeepGuard(glassDeepGuard);

		const iconProps = await getHighlightedCode(unescapeTag(codesProps.icon));
		setIconCodeProps(iconProps);
		const pageTitleProps = await getHighlightedCode(unescapeTag(codesProps.pageTitle));
		setPageTitleCodeProps(pageTitleProps);
		const typesProps = await getHighlightedCode(codesProps.types);
		setTypesCodeProps(typesProps);
		const groupProps = await getHighlightedCode(codesProps.group);
		setGroupCodeProps(groupProps);

		const glassExclude = await getHighlightedCode(unescapeTag(codesExclude.glass));
		setGlassCodeExclude(glassExclude);
	});

	return (
		<main>
			<PageMeta title="Types" />
			<Glass as="section">
				<Box>
					<PageTitle icon="code">型の制御例</PageTitle>
					<Paragraph>
						フロントエンドのフレームワークを使用した型の制御においては、以下のような方法を採用しています。<br />
						以下は、本サイト内でのソースの一例をご案内します。
					</Paragraph>
				</Box>
				<DeepGuard types={ typesCodeDeepGuard() } glass={ glassCodeDeepGuard() } />
				<Props icon={ iconCodeProps() } pageTitle={ pageTitleCodeProps() } types={ typesCodeProps() } group={ groupCodeProps() } />
				<Exclude glass={ glassCodeExclude() } />
			</Glass>
		</main>
	);
}
