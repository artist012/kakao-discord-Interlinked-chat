/*
 * Created on Sun Jul 04 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unwrapResult = void 0;
    /**
     * Unwrap CommandResult and convert failed case into error.
     *
     * @template T
     * @param {CommandResult<T>} commandRes CommandResult to unwrap
     * @return {T} Unwrapped result
     */
    function unwrapResult(commandRes) {
        if (!commandRes.success) {
            throw new Error(`Request failed with status: ${commandRes.status}`);
        }
        return commandRes;
    }
    exports.unwrapResult = unwrapResult;
});
//# sourceMappingURL=request.js.map