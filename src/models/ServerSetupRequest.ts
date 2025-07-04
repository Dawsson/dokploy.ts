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
 * @interface ServerSetupRequest
 */
export interface ServerSetupRequest {
    /**
     * 
     * @type {string}
     * @memberof ServerSetupRequest
     */
    serverId: string;
}

/**
 * Check if a given object implements the ServerSetupRequest interface.
 */
export function instanceOfServerSetupRequest(value: object): value is ServerSetupRequest {
    if (!('serverId' in value) || value['serverId'] === undefined) return false;
    return true;
}

export function ServerSetupRequestFromJSON(json: any): ServerSetupRequest {
    return ServerSetupRequestFromJSONTyped(json, false);
}

export function ServerSetupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServerSetupRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'serverId': json['serverId'],
    };
}

export function ServerSetupRequestToJSON(json: any): ServerSetupRequest {
    return ServerSetupRequestToJSONTyped(json, false);
}

export function ServerSetupRequestToJSONTyped(value?: ServerSetupRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'serverId': value['serverId'],
    };
}

