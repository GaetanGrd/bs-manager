import path from "path";
import { BsLaunchResult, LauchOption } from "shared/models/launch-models.model";
import { BSVersion } from "./bs-version-lib.service";
import { UtilsService } from "./utils.service";
import { BS_EXECUTABLE, BS_APP_ID } from "../constants";
import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { SteamService } from "./steam.service";
import { InstallationLocationService } from "./installation-location.service";

export class BSLauncherService{

    private static instance: BSLauncherService;

    private readonly utilsService: UtilsService;
    private readonly steamService: SteamService;
    private readonly installLocationService: InstallationLocationService;

    private bsProcess: ChildProcessWithoutNullStreams;

    public static getInstance(): BSLauncherService{
        if(!BSLauncherService.instance){ BSLauncherService.instance = new BSLauncherService(); }
        return BSLauncherService.instance;
    }

    private constructor(){
        this.utilsService = UtilsService.getInstance();
        this.steamService = SteamService.getInstance();
        this.installLocationService = InstallationLocationService.getInstance();
    }

    public isBsRunning(): boolean{
        return this.bsProcess?.connected || this.utilsService.taskRunning(BS_EXECUTABLE);
    }

    public isExeExist(version: BSVersion): boolean{
        const exePath = path.join(this.installLocationService.versionsDirectory, version.BSVersion, BS_EXECUTABLE);
        return this.utilsService.pathExist(exePath);
    }

    public async launch(launchOptions: LauchOption): Promise<BsLaunchResult>{
        if(!this.steamService.steamRunning()){ return "STEAM_NOT_RUNNING" }
        if(!this.isExeExist(launchOptions.version)){ return "EXE_NOT_FINDED"; }
        if(this.isBsRunning()){ return "BS_ALREADY_RUNNING" }

        const cwd = launchOptions.version.steam ? await this.steamService.getGameFolder(BS_APP_ID, "Beat Saber") : path.join(this.installLocationService.versionsDirectory, launchOptions.version.BSVersion);
        const exePath = path.join(cwd, BS_EXECUTABLE);
        const launchMods = [launchOptions.oculus && "-vrmode oculus", launchOptions.desktop && "fpfc", launchOptions.debug && "--verbose"];

        this.bsProcess = spawn(`\"${exePath}\"`, launchMods, {shell: true, cwd: cwd, env: {...process.env, "SteamAppId": BS_APP_ID}});

        this.bsProcess.on('message', msg => { /** EMIT HERE **/ });
        this.bsProcess.on('error', err => { /** EMIT HERE **/ });
        this.bsProcess.on('exit', code => this.utilsService.ipcSend("bs-launch.exit", {data: code, success: true}));

        return "LAUNCHED";
    }

}