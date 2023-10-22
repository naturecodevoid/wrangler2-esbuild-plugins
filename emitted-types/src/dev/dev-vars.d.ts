import type { Config } from "../config";
/**
 * Get the Worker `vars` bindings for a `wrangler dev` instance of a Worker.
 *
 * The `vars` bindings can be specified in the `wrangler.toml` configuration file.
 * But "secret" `vars` are usually only provided at the server -
 * either by creating them in the Dashboard UI, or using the `wrangler secret` command.
 *
 * It is useful during development, to provide these types of variable locally.
 * When running `wrangler dev` we will look for a file called `.dev.vars`, situated
 * next to the `wrangler.toml` file (or in the current working directory if there is no
 * `wrangler.toml`). If the `--env <env>` option is set, we'll first look for
 * `.dev.vars.<env>`.
 *
 * Any values in this file, formatted like a `dotenv` file, will add to or override `vars`
 * bindings provided in the `wrangler.toml`.
 */
export declare function getVarsForDev(config: Config, env: string | undefined): Config["vars"];
