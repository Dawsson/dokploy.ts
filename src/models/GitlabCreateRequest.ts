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
 * @interface GitlabCreateRequest
 */
export interface GitlabCreateRequest {
    /**
     * 
     * @type {string}
     * @memberof GitlabCreateRequest
     */
    gitlabId?: string;
    /**
     * 
     * @type {string}
     * @memberof GitlabCreateRequest
     */
    gitlabUrl: string;
    /**
     * 
     * @type {string}
     * @memberof GitlabCreateRequest
     */
    applicationId?: string;
    /**
     * 
     * @type {string}
     * @memberof GitlabCreateRequest
     */
    redirectUri?: string;
    /**
     * 
     * @type {string}
     * @memberof GitlabCreateRequest
     */
    secret?: string;
    /**
     * 
     * @type {string}
     * @memberof GitlabCreateRequest
     */
    accessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GitlabCreateRequest
     */
    refreshToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GitlabCreateRequest
     */
    groupName?: string;
    /**
     * 
     * @type {number}
     * @memberof GitlabCreateRequest
     */
    expiresAt?: number | null;
    /**
     * 
     * @type {string}
     * @memberof GitlabCreateRequest
     */
    gitProviderId?: string;
    /**
     * 
     * @type {string}
     * @memberof GitlabCreateRequest
     */
    authId: string;
    /**
     * 
     * @type {string}
     * @memberof GitlabCreateRequest
     */
    name: string;
}

/**
 * Check if a given object implements the GitlabCreateRequest interface.
 */
export function instanceOfGitlabCreateRequest(value: object): value is GitlabCreateRequest {
    if (!('gitlabUrl' in value) || value['gitlabUrl'] === undefined) return false;
    if (!('authId' in value) || value['authId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function GitlabCreateRequestFromJSON(json: any): GitlabCreateRequest {
    return GitlabCreateRequestFromJSONTyped(json, false);
}

export function GitlabCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GitlabCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'gitlabId': json['gitlabId'] == null ? undefined : json['gitlabId'],
        'gitlabUrl': json['gitlabUrl'],
        'applicationId': json['applicationId'] == null ? undefined : json['applicationId'],
        'redirectUri': json['redirectUri'] == null ? undefined : json['redirectUri'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'accessToken': json['accessToken'] == null ? undefined : json['accessToken'],
        'refreshToken': json['refreshToken'] == null ? undefined : json['refreshToken'],
        'groupName': json['groupName'] == null ? undefined : json['groupName'],
        'expiresAt': json['expiresAt'] == null ? undefined : json['expiresAt'],
        'gitProviderId': json['gitProviderId'] == null ? undefined : json['gitProviderId'],
        'authId': json['authId'],
        'name': json['name'],
    };
}

export function GitlabCreateRequestToJSON(json: any): GitlabCreateRequest {
    return GitlabCreateRequestToJSONTyped(json, false);
}

export function GitlabCreateRequestToJSONTyped(value?: GitlabCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gitlabId': value['gitlabId'],
        'gitlabUrl': value['gitlabUrl'],
        'applicationId': value['applicationId'],
        'redirectUri': value['redirectUri'],
        'secret': value['secret'],
        'accessToken': value['accessToken'],
        'refreshToken': value['refreshToken'],
        'groupName': value['groupName'],
        'expiresAt': value['expiresAt'],
        'gitProviderId': value['gitProviderId'],
        'authId': value['authId'],
        'name': value['name'],
    };
}

