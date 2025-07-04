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
 * @interface RedisMoveRequest
 */
export interface RedisMoveRequest {
    /**
     * 
     * @type {string}
     * @memberof RedisMoveRequest
     */
    redisId: string;
    /**
     * 
     * @type {string}
     * @memberof RedisMoveRequest
     */
    targetProjectId: string;
}

/**
 * Check if a given object implements the RedisMoveRequest interface.
 */
export function instanceOfRedisMoveRequest(value: object): value is RedisMoveRequest {
    if (!('redisId' in value) || value['redisId'] === undefined) return false;
    if (!('targetProjectId' in value) || value['targetProjectId'] === undefined) return false;
    return true;
}

export function RedisMoveRequestFromJSON(json: any): RedisMoveRequest {
    return RedisMoveRequestFromJSONTyped(json, false);
}

export function RedisMoveRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedisMoveRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'redisId': json['redisId'],
        'targetProjectId': json['targetProjectId'],
    };
}

export function RedisMoveRequestToJSON(json: any): RedisMoveRequest {
    return RedisMoveRequestToJSONTyped(json, false);
}

export function RedisMoveRequestToJSONTyped(value?: RedisMoveRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'redisId': value['redisId'],
        'targetProjectId': value['targetProjectId'],
    };
}

