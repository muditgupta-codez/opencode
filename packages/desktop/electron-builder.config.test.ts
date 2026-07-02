import { expect, test } from "bun:test"
import type { Configuration } from "electron-builder"

test("uses Forge Studio branding", async () => {
  const module = await import("./electron-builder.config.ts")
  const config = module.default as Configuration

  expect(config.appId).toBe("com.forgestudio.app")
  expect(config.productName).toBe("Forge Studio")
  expect(config.extraMetadata?.desktopName).toBe("com.forgestudio.app.desktop")
  expect(config.linux?.executableName).toBe("com.forgestudio.app")
  expect(config.linux?.desktop?.entry?.StartupWMClass).toBe("com.forgestudio.app")
  expect(config.rpm?.packageName).toBe("forge-studio")
})
