import { $ } from "bun"

const src = "./icons"
const dest = "resources/icons"

await $`rm -rf ${dest}`
await $`cp -R ${src} ${dest}`
console.log(`Copied icons from ${src} to ${dest}`)
