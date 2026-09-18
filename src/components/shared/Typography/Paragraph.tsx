import { Dynamic } from "solid-js/web";
import { propsClass } from "@/_global/lib/utils";
import type { ParagraphAttributes, DivAttributes } from "@/_global/types/components";
import type { DeepGuard } from "@/_global/types/types";
import "./Paragraph.sass";

type Props = (ParagraphAttributes & {
	as?: 'p';
}) | (DivAttributes & {
	as: 'div';
});

export default function Paragraph(props: DeepGuard<Props>) {
	return (
		<Dynamic component={ props.as ?? 'p' } { ...props } class="paragraph" classList={ propsClass(props) }>{ props.children }</Dynamic>
	)
}
