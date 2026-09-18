import { createEffect, createSignal, onMount, Show } from "solid-js";
import { months } from "@/_global/lib/shared";
import { sleep } from "@/_global/lib/utils";
import { useStore } from "@/_global/piquo";
import type { Months } from "@/_global/lib/shared";
import "./Bg.sass";

export default function Bg() {
	const [ currentMonth, setCurrentMonth ] = createSignal<Months>();
	const { selectedMonth, setSelectedMonth } = useStore('selectedMonth');

	let elBg: HTMLImageElement;
	const getSrcset = (month?: Months) => month ? `/images/bg/${ month }.webp 1920w, /images/bg/${ month }_sp.webp 768w` : '';

	onMount(() => {
		const month = months[(new Date()).getMonth()];
		setCurrentMonth(month);
	});

	createEffect(async () => {
		const next = selectedMonth();

		if (!elBg || !next) return;

		if (!('computedStyleMap' in elBg)) {
			setCurrentMonth(next);
			return;
		}

		const style = elBg.computedStyleMap();
		const duration = style.get('animation-duration') as CSSUnitValue;
		const delay = duration.value * 1000;
		await sleep(delay);

		setCurrentMonth(next);
		setSelectedMonth();
	});

	return (
		<div id="bg">
			<img ref={ (el) => elBg = el } alt="" srcset={ getSrcset(currentMonth()) } data-testid="bg" />
			<Show when={ selectedMonth() }>
				{next => (
					<img id="selected_bg" srcset={ getSrcset(next()) } alt="" />
				)}
			</Show>
		</div>
	)
}
