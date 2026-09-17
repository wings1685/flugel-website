import { Dynamic } from "solid-js/web";
import { A } from "@solidjs/router";

import { propsClass } from "@/_global/lib/utils";

import { Section } from "./";
import { Icon } from "../Utils";

import type { DeepGuard } from "@/_global/types/types";
import type { AsDiv, AsSection, AsLink } from "@/_global/types/components";
import type { ComponentProps } from "solid-js";

import "./Glass.sass";

type IconProps = Pick<ComponentProps<typeof Icon>, 'type'>;
type Props = {
	mini?: boolean;
	isDark?: boolean;
} & ( | AsDiv | AsSection | ( AsLink & {
	href: string;
	icon?: IconProps['type'];
}) );

export default function Glass(props: DeepGuard<Props>) {
	const as = props.as === 'section' ? Section : props.as || 'div';

	if (props.as === 'a') {
		return (
			<A { ...props } class="glass mini is_dark" classList={ { ...propsClass(props) } }>
				{ props.children }
				{props.as === 'a' && props.icon && (
					<Icon type={ props.icon } />
				)}
			</A>
		)
	}

	return (
		<Dynamic component={ as } { ...props } class="glass" classList={ { mini: props.mini, is_dark: props.isDark, ...propsClass(props) } }>
			{ props.children }
		</Dynamic>
	)
}
