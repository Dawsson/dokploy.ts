/* tslint:disable */
/* eslint-disable */
/**
 * Dokploy API
 * Endpoints for dokploy
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SettingsUpdateDockerCleanupRequest
 */
export interface SettingsUpdateDockerCleanupRequest {
    /**
     * 
     * @type {boolean}
     * @memberof SettingsUpdateDockerCleanupRequest
     */
    enableDockerCleanup: boolean;
    /**
     * 
     * @type {string}
     * @memberof SettingsUpdateDockerCleanupRequest
     */
    serverId?: string;
}

/**
 * Check if a given object implements the SettingsUpdateDockerCleanupRequest interface.
 */
export function instanceOfSettingsUpdateDockerCleanupRequest(value: object): value is SettingsUpdateDockerCleanupRequest {
    if (!('enableDockerCleanup' in value) || value['enableDockerCleanup'] === undefined) return false;
    return true;
}

export function SettingsUpdateDockerCleanupRequestFromJSON(json: any): SettingsUpdateDockerCleanupRequest {
    return SettingsUpdateDockerCleanupRequestFromJSONTyped(json, false);
}

export function SettingsUpdateDockerCleanupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SettingsUpdateDockerCleanupRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'enableDockerCleanup': json['enableDockerCleanup'],
        'serverId': json['serverId'] == null ? undefined : json['serverId'],
    };
}

export function SettingsUpdateDockerCleanupRequestToJSON(json: any): SettingsUpdateDockerCleanupRequest {
    return SettingsUpdateDockerCleanupRequestToJSONTyped(json, false);
}

export function SettingsUpdateDockerCleanupRequestToJSONTyped(value?: SettingsUpdateDockerCleanupRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'enableDockerCleanup': value['enableDockerCleanup'],
        'serverId': value['serverId'],
    };
}

