import path from "path";
import { app, BrowserWindow } from "electron";
import { IpcResponse } from "shared/models/ipc";
import log from "electron-log";

// TODO : REFACTOR

export class UtilsService {
    private static instance: UtilsService;

    private assetsPath: string = app.isPackaged
        ? path.join(process.resourcesPath, "assets")
        : path.join(path.dirname(path.dirname(__dirname)), "assets");
    private readonly buildPath: string = app.isPackaged
        ? path.join(process.resourcesPath, "build")
        : path.join(path.dirname(path.dirname(__dirname)), "build");

    private constructor() {}

    public static getInstance() {
        if (!this.instance) {
            UtilsService.instance = new UtilsService();
        }
        return UtilsService.instance;
    }

    public setAssetsPath(path: string): void {
        this.assetsPath = path;
    }
    public getAssetsPath(pathToFile: string): string {
        return path.join(this.assetsPath, pathToFile);
    }

    public getAssetsScriptsPath(): string {
        return this.getAssetsPath("scripts");
    }
    public getAssestsJsonsPath(): string {
        return this.getAssetsPath("jsons");
    }
    public getTempPath(): string {
        return path.join(app.getPath("temp"), app.getName());
    }

    public getBuildPath(filepath: string): string {
        return path.join(this.buildPath, filepath);
    }

    public ipcSend<T = unknown>(channel: string, response: IpcResponse<T>): void {
        try {
            BrowserWindow.getAllWindows().forEach(window => window?.webContents?.send(channel, response));
        } catch (error) {
            log.error(error);
        }
    }
}
