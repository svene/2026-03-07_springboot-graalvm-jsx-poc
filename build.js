import { build } from "bun";
import { readdirSync, statSync } from "fs";
import { join, relative, dirname } from "path";
import { mkdirSync } from "fs";

const base = "src/main/java/org/svenehrke/demo/web";
const outdir = "target/classes/static/fe";

function collectTsxFiles(dir) {
	let files = [];
	for (const f of readdirSync(dir)) {
		const fullPath = join(dir, f);
		if (statSync(fullPath).isDirectory()) {
			files.push(...collectTsxFiles(fullPath));
		} else if (f.endsWith(".tsx")) {
			files.push(fullPath);
		}
	}
	return files;
}

async function runBuild() {
	console.log(`Running complete build...`);
	const entrypoints = collectTsxFiles(base);

	for (const file of entrypoints) {
		const relPath = relative(base, file);
		const outPathDir = join(outdir, dirname(relPath));
		mkdirSync(outPathDir, { recursive: true });

		await build({
			entrypoints: [file],
			outdir: outPathDir,
			target: "browser",
			format: "esm",
			jsx: { mode: "react-jsx", importSource: "preact" }
		});
	}

	console.log("✅ Build complete");
}

await runBuild();
