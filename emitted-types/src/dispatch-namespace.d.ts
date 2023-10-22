import type { CommonYargsArgv, CommonYargsOptions } from "./yargs-types";
import type { CommandModule } from "yargs";
export declare function workerNamespaceCommands(workerNamespaceYargs: CommonYargsArgv, subHelp: CommandModule<CommonYargsOptions, CommonYargsOptions>): import("yargs").Argv<import("yargs").Omit<import("yargs").Omit<CommonYargsOptions & {
    name: string;
}, "name"> & {
    name: string;
}, "name"> & {
    name: string;
} & {
    "old-name": string;
} & {
    "new-name": string;
}>;
