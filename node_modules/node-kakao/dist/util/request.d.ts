import { CommandResult, CommandResultDone } from "../request";
/**
 * Unwrap CommandResult and convert failed case into error.
 *
 * @template T
 * @param {CommandResult<T>} commandRes CommandResult to unwrap
 * @return {T} Unwrapped result
 */
export declare function unwrapResult<T>(commandRes: CommandResult<T>): CommandResultDone<T>;
