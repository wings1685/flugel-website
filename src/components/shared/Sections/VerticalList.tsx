import { propsClass } from "@/_global/lib/utils";
import type { UListAttributes } from "@/_global/types/components";
import type { DeepGuard } from "@/_global/types/types";
import "./VerticalList.sass";

export default function VerticalList(props: DeepGuard<UListAttributes>) {
	return (
		<ul { ...props } class="vertical_list" classList={ propsClass(props) }>
			{ props.children }
		</ul>
	)
}
