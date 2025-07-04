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
 * @interface OrganizationCreateRequest
 */
export interface OrganizationCreateRequest {
    /**
     * 
     * @type {string}
     * @memberof OrganizationCreateRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationCreateRequest
     */
    logo?: string;
}

/**
 * Check if a given object implements the OrganizationCreateRequest interface.
 */
export function instanceOfOrganizationCreateRequest(value: object): value is OrganizationCreateRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function OrganizationCreateRequestFromJSON(json: any): OrganizationCreateRequest {
    return OrganizationCreateRequestFromJSONTyped(json, false);
}

export function OrganizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'logo': json['logo'] == null ? undefined : json['logo'],
    };
}

export function OrganizationCreateRequestToJSON(json: any): OrganizationCreateRequest {
    return OrganizationCreateRequestToJSONTyped(json, false);
}

export function OrganizationCreateRequestToJSONTyped(value?: OrganizationCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'logo': value['logo'],
    };
}

