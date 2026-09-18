# flugel.biz

稼働している自分自身の屋号サイトのリポジトリです。

**Note:** 本リポジトリは、自分自身の屋号サイトであるため Issues 及び Pull Requests は受け付けておりません。

## Tech Stack

- SolidStart 1.3.2 (SSG)
- TypeScript
- Sass
- ky
- Valibot
- Shiki

## Features

- Liquid Glass デザインを模した透明感
- 再帰的に Readonly を付与する DeepGuard による型安全性
- SSR 安全なグローバルストア機構（piquo）
- ルーティングファイルは極限まで薄く、本体は components/ に配置

## Related Articles

- [同一サイトの 9 フレームワークパターンでのリプレイス祭](https://wings.hatenablog.com/entry/replaceFestival)
- [Astro 上の Solid / Svelte / Vue にグローバルストアを持たせたい](https://wings.hatenablog.com/entry/AstroGlobalStores)
- [JS フレームワークにおいてフォルダ構成の思想](https://wings.hatenablog.com/entry/FolderIdea)

## Replaced Festival Repositories

この屋号サイトを題材として、各フレームワークへのリプレイス祭を開催しました。

- [SvelteKit 版](https://github.com/wings1685/flugel-website-sveltekit)
- [Qwik 版](https://github.com/wings1685/flugel-website-qwik)
- [Next.js 版](https://github.com/wings1685/flugel-website-next)
- [Nuxt 版](https://github.com/wings1685/flugel-website-nuxt)
- [Astro + Solid / Svelte / Vue 版](https://github.com/wings1685/flugel-website-astro)
- [Astro + React 版](https://github.com/wings1685/flugel-website-astro-react)

## Folder Map

```
src/
├─ _global/
│ ├─ lib/
│ ├─ piquo/
│ ├─ styles/
│ ├─ types/
├─ _test/
├─ components/
│ ├─ routes/
│ │ ├─ _models/
│ │ ├─ _parts/
│ │ ├─ archives/
│ │ │ ├─ _models/
│ │ │ ├─ _parts/
│ │ ├─ types/
│ │ │ ├─ _models/
│ │ │ ├─ _parts/
│ ├─ shared/
│ │ ├─ Sections/
│ │ ├─ Typography/
│ │ ├─ Utils/
├─ routes/
```
