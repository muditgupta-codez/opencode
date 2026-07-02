#!/usr/bin/env bun
import { $ } from "bun"

await $`bun ./scripts/copy-icons.ts`
await $`bun ./scripts/copy-metainfo.ts`

await $`cd ../opencode && bun script/build-node.ts`
