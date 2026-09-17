import { propsClass } from "@/_global/lib/utils";

import type { UListAttributes } from "@/_global/types/components";
import type { DeepGuard } from "@/_global/types/types";

import "./HorizontalList.sass";

export default function HorizontalList(props: DeepGuard<UListAttributes>) {
	return (
		<ul { ...props } class="horizontal_list" classList={ propsClass(props) }>
			{ props.children }
		</ul>
	)
}
