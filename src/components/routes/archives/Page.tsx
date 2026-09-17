import { PageMeta } from "@/components/shared/Utils";
import { Archives, Environment } from "./_parts";

export default function Page() {
	return (
		<main>
			<PageMeta title="Archives" />
			<Environment />
			<Archives />
		</main>
	);
}
