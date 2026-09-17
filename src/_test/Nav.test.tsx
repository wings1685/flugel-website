import { describe, it, expect } from "vitest";
import { render, fireEvent, waitFor } from "@solidjs/testing-library";
import { ContextProvider } from "@/_global/contexts";
import { Nav } from "@/components/shared/Sections";
import { Bg } from "@/components/shared/Utils";
import { monthData } from "@/_global/lib/shared";
import type { FlagContextsType } from "@/_global/contexts/flags";
import { useStore } from "@/_global/piquo";

describe('Nav コンポーネントと Bg コンポーネントの月変更連動テスト', () => {
	it('リンクを押したら月表示が変わるか', async () => {
		let flagContexts: FlagContextsType;
		const TestWrapper = () => {
			return (
				<>
					<Nav />
					<Bg />
				</>
			);
		};
		const { queryAllByRole, getByTestId } = render(() =>
			<ContextProvider>
				<TestWrapper />
			</ContextProvider>
		);

		// 1. Nav コンポーネントのリンクが 12 か月分生成されているか確認
		const links = queryAllByRole('link');
		expect(links.length).toBe(12);

		// 2. Nav コンポーネントの現在月の次の月を押して Store が切り替わるか確認
		const month = new Date().getMonth() + 1;
		const monthString = Object.keys(monthData)[month];
		fireEvent.click(links[month]);
		await waitFor(() => {
			const { selectedMonth } = useStore('selectedMonth');

			expect(selectedMonth()).toBe(monthString);
		}, { timeout: 100 });

		// 3. Bg コンポーネントで srcset に切り替わった月の画像が入ったか確認
		await waitFor(() => {
			const bg = getByTestId('bg');
			const regexp = new RegExp(`${monthString}.webp`);
			expect(bg.getAttribute('srcset')).toMatch(regexp);
		}, { timeout: 100 });
	});
});
