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
 * @interface MariadbSaveEnvironmentRequest
 */
export interface MariadbSaveEnvironmentRequest {
    /**
     * 
     * @type {string}
     * @memberof MariadbSaveEnvironmentRequest
     */
    mariadbId: string;
    /**
     * 
     * @type {string}
     * @memberof MariadbSaveEnvironmentRequest
     */
    env?: string | null;
}

/**
 * Check if a given object implements the MariadbSaveEnvironmentRequest interface.
 */
export function instanceOfMariadbSaveEnvironmentRequest(value: object): value is MariadbSaveEnvironmentRequest {
    if (!('mariadbId' in value) || value['mariadbId'] === undefined) return false;
    return true;
}

export function MariadbSaveEnvironmentRequestFromJSON(json: any): MariadbSaveEnvironmentRequest {
    return MariadbSaveEnvironmentRequestFromJSONTyped(json, false);
}

export function MariadbSaveEnvironmentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MariadbSaveEnvironmentRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'mariadbId': json['mariadbId'],
        'env': json['env'] == null ? undefined : json['env'],
    };
}

export function MariadbSaveEnvironmentRequestToJSON(json: any): MariadbSaveEnvironmentRequest {
    return MariadbSaveEnvironmentRequestToJSONTyped(json, false);
}

export function MariadbSaveEnvironmentRequestToJSONTyped(value?: MariadbSaveEnvironmentRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'mariadbId': value['mariadbId'],
        'env': value['env'],
    };
}

