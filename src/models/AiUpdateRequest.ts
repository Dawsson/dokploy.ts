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
 * @interface AiUpdateRequest
 */
export interface AiUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof AiUpdateRequest
     */
    aiId: string;
    /**
     * 
     * @type {string}
     * @memberof AiUpdateRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AiUpdateRequest
     */
    apiUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AiUpdateRequest
     */
    apiKey?: string;
    /**
     * 
     * @type {string}
     * @memberof AiUpdateRequest
     */
    model?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AiUpdateRequest
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AiUpdateRequest
     */
    createdAt?: string;
}

/**
 * Check if a given object implements the AiUpdateRequest interface.
 */
export function instanceOfAiUpdateRequest(value: object): value is AiUpdateRequest {
    if (!('aiId' in value) || value['aiId'] === undefined) return false;
    return true;
}

export function AiUpdateRequestFromJSON(json: any): AiUpdateRequest {
    return AiUpdateRequestFromJSONTyped(json, false);
}

export function AiUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AiUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'aiId': json['aiId'],
        'name': json['name'] == null ? undefined : json['name'],
        'apiUrl': json['apiUrl'] == null ? undefined : json['apiUrl'],
        'apiKey': json['apiKey'] == null ? undefined : json['apiKey'],
        'model': json['model'] == null ? undefined : json['model'],
        'isEnabled': json['isEnabled'] == null ? undefined : json['isEnabled'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
    };
}

export function AiUpdateRequestToJSON(json: any): AiUpdateRequest {
    return AiUpdateRequestToJSONTyped(json, false);
}

export function AiUpdateRequestToJSONTyped(value?: AiUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'aiId': value['aiId'],
        'name': value['name'],
        'apiUrl': value['apiUrl'],
        'apiKey': value['apiKey'],
        'model': value['model'],
        'isEnabled': value['isEnabled'],
        'createdAt': value['createdAt'],
    };
}

