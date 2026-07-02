const appId = "com.forgestudio.app"
const productName = "Forge Studio"
const summary = "AI-powered development tool"
const developerId = "dev.forgestudio"
const developerName = "Forge Studio"

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<component type="desktop-application">
  <id>${appId}</id>

  <metadata_license>CC0-1.0</metadata_license>
  <project_license>MIT</project_license>

  <name>${productName}</name>
  <summary>${summary}</summary>

  <developer id="${developerId}">
    <name>${developerName}</name>
  </developer>

  <description>
    <p>
      Forge Studio is an AI-powered development tool built on opencode,
      helping you write and run code with any AI model.
    </p>
  </description>

  <launchable type="desktop-id">${appId}.desktop</launchable>

  <content_rating type="oars-1.1" />

  <url type="bugtracker">https://github.com/forge-studio/forge-studio/issues</url>
  <url type="homepage">https://forge-studio.dev</url>
  <url type="vcs-browser">https://github.com/forge-studio/forge-studio</url>
</component>
`

await Bun.write(`resources/${appId}.metainfo.xml`, xml)
console.log(`Generated metainfo at resources/${appId}.metainfo.xml`)
