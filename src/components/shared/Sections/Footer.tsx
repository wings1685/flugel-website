import { createSignal, onMount } from "solid-js";

import { flugel } from "@/_global/lib/shared";

import { Glass, Group } from "./";

export default function Footer() {
	const [ year, setYear ] = createSignal<number>(2026);
	onMount(() => setYear((new Date()).getFullYear()));

	return (
		<footer>
			<Group>
				<Glass mini>
					<p class="copyright">{ flugel } &copy; { year() }</p>
				</Glass>
			</Group>
		</footer>
	)
}
