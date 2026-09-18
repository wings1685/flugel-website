import { propsClass } from "@/_global/lib/utils";
import type { SectionAttributes } from "@/_global/types/components";
import type { DeepGuard } from "@/_global/types/types";
import "./Section.sass";

type Props = SectionAttributes;

export default function Section(props: DeepGuard<Props>) {
	return (
		<section { ...props } class="section" classList={ propsClass(props) }>{props.children}</section>
	)
}
