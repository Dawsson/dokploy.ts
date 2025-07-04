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
 * @interface DomainDeleteRequest
 */
export interface DomainDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof DomainDeleteRequest
     */
    domainId: string;
}

/**
 * Check if a given object implements the DomainDeleteRequest interface.
 */
export function instanceOfDomainDeleteRequest(value: object): value is DomainDeleteRequest {
    if (!('domainId' in value) || value['domainId'] === undefined) return false;
    return true;
}

export function DomainDeleteRequestFromJSON(json: any): DomainDeleteRequest {
    return DomainDeleteRequestFromJSONTyped(json, false);
}

export function DomainDeleteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainDeleteRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'domainId': json['domainId'],
    };
}

export function DomainDeleteRequestToJSON(json: any): DomainDeleteRequest {
    return DomainDeleteRequestToJSONTyped(json, false);
}

export function DomainDeleteRequestToJSONTyped(value?: DomainDeleteRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'domainId': value['domainId'],
    };
}

