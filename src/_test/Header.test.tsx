import { describe, it, expect } from "vitest";
import { render, fireEvent, waitFor } from "@solidjs/testing-library";
import { MemoryRouter, Route, createMemoryHistory } from "@solidjs/router";
import { Header } from "@/components/shared/Sections";

describe('Header コンポーネントのナビゲーションテスト', () => {
	it('Typesリンクをクリックしたとき、正常にパスが切り替わり active クラスが付与されるか', async () => {
		// 1. テスト用の仮想ルーター（createMemoryHistory）の初期状態をセットアップ
		const history = createMemoryHistory();
		history.set({ value: '/', replace: true });

		const { getByRole } = render(() => (
			<MemoryRouter history={ history }>
				<Route path="/" component={(props) => (
					<>
						<Header />
						{props.children}
					</>
				)}>
					<Route path="/" component={() => <p>top</p>} />
					<Route path="/types/" component={() => <p>types</p>} />
				</Route>
			</MemoryRouter>
		));

		// 2. 最初は "Home" に active クラスがついていることを確認
		const homeLink = getByRole('link', { name: /Home/i });
		expect(homeLink.classList.contains('active')).toBe(true);

		// 3. "Types" のリンクを取得して、クリックイベントを発生させる
		const typesLink = getByRole('link', { name: /Types/i });
		fireEvent.click(typesLink);
		await waitFor(() => {
			// 4. 【検証】ルーターのパスが '/types/' に遷移したかを確認
			expect(history.get()).toBe('/types/');
		}, { timeout: 100 });

		// 5. 【検証】"Types" リンクに active クラスが付き、"Home" から外れたかを確認
		// ※Solidのリアクティビティによって、DOMが即座に更新されるかをテストします
		expect(typesLink.classList.contains('active')).toBe(true);
		expect(homeLink.classList.contains('active')).toBe(false);
	});
});
