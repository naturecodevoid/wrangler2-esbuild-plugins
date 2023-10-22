import type { CommonYargsArgv } from "../yargs-types";
import type { Database } from "./types";
export declare function Options(d1ListYargs: CommonYargsArgv): import("yargs").Argv<import("../yargs-types").CommonYargsOptions & {
    json: boolean;
}>;
export declare const Handler: (t: import("../config/config").OnlyCamelCase<import("../config/config").OnlyCamelCase<{
    v: boolean | undefined;
    config: string | undefined;
    env: string | undefined;
    "experimental-json-config": boolean | undefined;
    experimentalJsonConfig: boolean | undefined;
    json: boolean;
    _: (string | number)[];
    $0: string;
}> & import("../yargs-types").CommonYargsOptions>) => Promise<void>;
export declare const listDatabases: (accountId: string) => Promise<Array<Database>>;
