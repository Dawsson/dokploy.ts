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
 * @interface MountsRemoveRequest
 */
export interface MountsRemoveRequest {
    /**
     * 
     * @type {string}
     * @memberof MountsRemoveRequest
     */
    mountId: string;
}

/**
 * Check if a given object implements the MountsRemoveRequest interface.
 */
export function instanceOfMountsRemoveRequest(value: object): value is MountsRemoveRequest {
    if (!('mountId' in value) || value['mountId'] === undefined) return false;
    return true;
}

export function MountsRemoveRequestFromJSON(json: any): MountsRemoveRequest {
    return MountsRemoveRequestFromJSONTyped(json, false);
}

export function MountsRemoveRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MountsRemoveRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'mountId': json['mountId'],
    };
}

export function MountsRemoveRequestToJSON(json: any): MountsRemoveRequest {
    return MountsRemoveRequestToJSONTyped(json, false);
}

export function MountsRemoveRequestToJSONTyped(value?: MountsRemoveRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'mountId': value['mountId'],
    };
}

