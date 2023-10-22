import type { Config } from "./config";
import type { CfScriptFormat } from "./worker";
/**
 * An entry point for the Worker.
 *
 * It consists not just of a `file`, but also of a `directory` that is used to resolve relative paths.
 */
export declare type Entry = {
    /** A worker's entrypoint */
    file: string;
    /** A worker's directory. Usually where the wrangler.toml file is located */
    directory: string;
    /** Is this a module worker or a service worker? */
    format: CfScriptFormat;
    /** The directory that contains all of a `--no-bundle` worker's modules. Usually `${directory}/src`. Defaults to path.dirname(file) */
    moduleRoot: string;
};
/**
 * Compute the entry-point for the Worker.
 */
export declare function getEntry(args: {
    script?: string;
    format?: CfScriptFormat | undefined;
    assets?: string | undefined;
}, config: Config, command: "dev" | "publish" | "types"): Promise<Entry>;
export declare function runCustomBuild(expectedEntryAbsolute: string, expectedEntryRelative: string, build: Config["build"]): Promise<void>;
/**
 * A function to "guess" the type of worker.
 * We do this by running a lightweight build of the actual script,
 * and looking at the metafile generated by esbuild. If it has a default
 * export (or really, any exports), that means it's a "modules" worker.
 * Else, it's a "service-worker" worker. This seems hacky, but works remarkably
 * well in practice.
 */
export default function guessWorkerFormat(entryFile: string, entryWorkingDirectory: string, hint: CfScriptFormat | undefined, tsconfig?: string | undefined): Promise<CfScriptFormat>;
/**
 * Returns true if the given `filePath` exists as-is,
 * or if some version of it (by appending a common extension) exists.
 */
export declare function fileExists(filePath: string): boolean;
