import { OpenLinkComponent } from '.';
/**
 * Anon profile template
 */
export interface OpenLinkAnonProfile {
    /**
     * Nickname
     */
    nickname: string;
    /**
     * Profile image path(not url)
     */
    profilePath: string;
}
/**
 * Main profile template
 */
export interface OpenLinkMainProfile {
}
/**
 * Link profile template
 */
export declare type OpenLinkLinkProfile = OpenLinkComponent;
export declare type OpenLinkProfiles = OpenLinkAnonProfile | OpenLinkMainProfile | OpenLinkLinkProfile;
export declare namespace OpenLinkProfile {
    /**
     * Serialize template to packet key / value structure.
     * @param {OpenLinkProfiles} template
     * @return {Record<string, unknown>}
     */
    function serializeLinkProfile(template: OpenLinkProfiles): Record<string, unknown>;
}
