import { defineConfig } from "@solidjs/start/config";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "@rollup/plugin-yaml";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	server: {
		prerender: {
			routes: ["/", "/404"],
			crawlLinks: true,
		},
	},
	vite: {
		plugins: [
			yaml(),
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, './src')
			}
		}
	}
});
