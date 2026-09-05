# HDA PoC with Spring Boot, JSX and GraalVM

> **Status: historical PoC — deliberately not updated.**
> This project predates two later conventions and is kept as-is to preserve the
> original PoC:
> - it uses `hono/jsx` (`.tsx`), whereas the current preference is hono's
>   `html``` tagged template (`.ts`);
> - it generates **Java from TypeScript** (`javagen/generate-java-from-hono.ts`),
>   whereas the current preference is the reverse (**Java → TS** via the
>   `typescript-generator` Maven plugin, Java being the source of truth).
>
> The full demo built on this PoC is
> [`../2026-03-09_hda-springboot-graalvm-jsx-demo`](../2026-03-09_hda-springboot-graalvm-jsx-demo),
> which follows both current conventions.

## Development

- run `bun install` (only once)
- run `bun javagen/generate-java-from-hono.ts` (only once)
- make sure `target/generated-sources/tsjava` is part of your IDE's source path (IntelliJ: Project Tree->right click 'Maven/Generate Sources and Update Folders') (only once)
- run `bun run watch`
- start Spring Boot App
- point browser to http://localhost:8080

Changes in tsx files will be immediately visible in browser.
