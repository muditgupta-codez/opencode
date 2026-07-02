import { app } from "electron"

export const CHANNEL = "prod" as const
export const UPDATER_ENABLED = app.isPackaged
