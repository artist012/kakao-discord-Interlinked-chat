/*
 * Created on Wed Jan 27 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./open-link-type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OpenLinkProfile = void 0;
    const open_link_type_1 = require("./open-link-type");
    var OpenLinkProfile;
    (function (OpenLinkProfile) {
        /**
         * Serialize template to packet key / value structure.
         * @param {OpenLinkProfiles} template
         * @return {Record<string, unknown>}
         */
        function serializeLinkProfile(template) {
            if ('linkId' in template) {
                return { ptp: open_link_type_1.OpenProfileType.OPEN_PROFILE, pli: template.linkId };
            }
            else if ('nickname' in template) {
                return { ptp: open_link_type_1.OpenProfileType.KAKAO_ANON, nn: template.nickname, pp: template.profilePath };
            }
            else {
                return { ptp: open_link_type_1.OpenProfileType.MAIN };
            }
        }
        OpenLinkProfile.serializeLinkProfile = serializeLinkProfile;
    })(OpenLinkProfile = exports.OpenLinkProfile || (exports.OpenLinkProfile = {}));
});
//# sourceMappingURL=open-link-profile.js.map