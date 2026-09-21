import { PageMeta } from "@/components/shared/Utils";
import { Archives, Experiments, Environment } from "./_parts";

export default function Page() {
	return (
		<main>
			<PageMeta title="Archives" />
			<Environment />
			<Experiments />
			<Archives />
		</main>
	);
}
