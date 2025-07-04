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
 * @interface ApplicationUpdateRequestModeSwarmReplicatedJob
 */
export interface ApplicationUpdateRequestModeSwarmReplicatedJob {
    /**
     * 
     * @type {number}
     * @memberof ApplicationUpdateRequestModeSwarmReplicatedJob
     */
    maxConcurrent?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationUpdateRequestModeSwarmReplicatedJob
     */
    totalCompletions?: number;
}

/**
 * Check if a given object implements the ApplicationUpdateRequestModeSwarmReplicatedJob interface.
 */
export function instanceOfApplicationUpdateRequestModeSwarmReplicatedJob(value: object): value is ApplicationUpdateRequestModeSwarmReplicatedJob {
    return true;
}

export function ApplicationUpdateRequestModeSwarmReplicatedJobFromJSON(json: any): ApplicationUpdateRequestModeSwarmReplicatedJob {
    return ApplicationUpdateRequestModeSwarmReplicatedJobFromJSONTyped(json, false);
}

export function ApplicationUpdateRequestModeSwarmReplicatedJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationUpdateRequestModeSwarmReplicatedJob {
    if (json == null) {
        return json;
    }
    return {
        
        'maxConcurrent': json['MaxConcurrent'] == null ? undefined : json['MaxConcurrent'],
        'totalCompletions': json['TotalCompletions'] == null ? undefined : json['TotalCompletions'],
    };
}

export function ApplicationUpdateRequestModeSwarmReplicatedJobToJSON(json: any): ApplicationUpdateRequestModeSwarmReplicatedJob {
    return ApplicationUpdateRequestModeSwarmReplicatedJobToJSONTyped(json, false);
}

export function ApplicationUpdateRequestModeSwarmReplicatedJobToJSONTyped(value?: ApplicationUpdateRequestModeSwarmReplicatedJob | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'MaxConcurrent': value['maxConcurrent'],
        'TotalCompletions': value['totalCompletions'],
    };
}

