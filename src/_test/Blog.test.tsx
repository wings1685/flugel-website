import { describe, it, expect } from "vitest";
import { render, waitFor } from "@solidjs/testing-library";
import { ContextProvider } from "@/_global/contexts";
import { Blog } from "@/components/routes/_parts";
import type { FlagContextsType } from "@/_global/contexts/flags";

describe('Blog コンポーネントのリアルデータ取得テスト', () => {
	it('実際にAPIやネットワークからデータを取得し、画面に記事がレンダリングされるか', async () => {
		let flagContexts: FlagContextsType;
		const TestWrapper = () => {
			return <Blog />;
		};
		const { queryAllByRole } = render(() =>
			<ContextProvider>
				<TestWrapper />
			</ContextProvider>
		);
		await waitFor(() => {
			const articles = queryAllByRole('article');
			expect(articles.length).toBeGreaterThan(0);
		}, { timeout: 1000 });
	});
});
