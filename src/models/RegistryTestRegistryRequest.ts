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
 * @interface RegistryTestRegistryRequest
 */
export interface RegistryTestRegistryRequest {
    /**
     * 
     * @type {string}
     * @memberof RegistryTestRegistryRequest
     */
    registryName?: string;
    /**
     * 
     * @type {string}
     * @memberof RegistryTestRegistryRequest
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof RegistryTestRegistryRequest
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof RegistryTestRegistryRequest
     */
    registryUrl: string;
    /**
     * 
     * @type {string}
     * @memberof RegistryTestRegistryRequest
     */
    registryType: RegistryTestRegistryRequestRegistryTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RegistryTestRegistryRequest
     */
    imagePrefix?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegistryTestRegistryRequest
     */
    serverId?: string;
}


/**
 * @export
 */
export const RegistryTestRegistryRequestRegistryTypeEnum = {
    Cloud: 'cloud'
} as const;
export type RegistryTestRegistryRequestRegistryTypeEnum = typeof RegistryTestRegistryRequestRegistryTypeEnum[keyof typeof RegistryTestRegistryRequestRegistryTypeEnum];


/**
 * Check if a given object implements the RegistryTestRegistryRequest interface.
 */
export function instanceOfRegistryTestRegistryRequest(value: object): value is RegistryTestRegistryRequest {
    if (!('username' in value) || value['username'] === undefined) return false;
    if (!('password' in value) || value['password'] === undefined) return false;
    if (!('registryUrl' in value) || value['registryUrl'] === undefined) return false;
    if (!('registryType' in value) || value['registryType'] === undefined) return false;
    return true;
}

export function RegistryTestRegistryRequestFromJSON(json: any): RegistryTestRegistryRequest {
    return RegistryTestRegistryRequestFromJSONTyped(json, false);
}

export function RegistryTestRegistryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistryTestRegistryRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'registryName': json['registryName'] == null ? undefined : json['registryName'],
        'username': json['username'],
        'password': json['password'],
        'registryUrl': json['registryUrl'],
        'registryType': json['registryType'],
        'imagePrefix': json['imagePrefix'] == null ? undefined : json['imagePrefix'],
        'serverId': json['serverId'] == null ? undefined : json['serverId'],
    };
}

export function RegistryTestRegistryRequestToJSON(json: any): RegistryTestRegistryRequest {
    return RegistryTestRegistryRequestToJSONTyped(json, false);
}

export function RegistryTestRegistryRequestToJSONTyped(value?: RegistryTestRegistryRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'registryName': value['registryName'],
        'username': value['username'],
        'password': value['password'],
        'registryUrl': value['registryUrl'],
        'registryType': value['registryType'],
        'imagePrefix': value['imagePrefix'],
        'serverId': value['serverId'],
    };
}

