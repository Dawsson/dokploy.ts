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
 * @interface NotificationCreateGotifyRequest
 */
export interface NotificationCreateGotifyRequest {
    /**
     * 
     * @type {boolean}
     * @memberof NotificationCreateGotifyRequest
     */
    appBuildError: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationCreateGotifyRequest
     */
    databaseBackup: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationCreateGotifyRequest
     */
    dokployRestart: boolean;
    /**
     * 
     * @type {string}
     * @memberof NotificationCreateGotifyRequest
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationCreateGotifyRequest
     */
    appDeploy: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationCreateGotifyRequest
     */
    dockerCleanup: boolean;
    /**
     * 
     * @type {string}
     * @memberof NotificationCreateGotifyRequest
     */
    serverUrl: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationCreateGotifyRequest
     */
    appToken: string;
    /**
     * 
     * @type {number}
     * @memberof NotificationCreateGotifyRequest
     */
    priority: number;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationCreateGotifyRequest
     */
    decoration: boolean;
}

/**
 * Check if a given object implements the NotificationCreateGotifyRequest interface.
 */
export function instanceOfNotificationCreateGotifyRequest(value: object): value is NotificationCreateGotifyRequest {
    if (!('appBuildError' in value) || value['appBuildError'] === undefined) return false;
    if (!('databaseBackup' in value) || value['databaseBackup'] === undefined) return false;
    if (!('dokployRestart' in value) || value['dokployRestart'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('appDeploy' in value) || value['appDeploy'] === undefined) return false;
    if (!('dockerCleanup' in value) || value['dockerCleanup'] === undefined) return false;
    if (!('serverUrl' in value) || value['serverUrl'] === undefined) return false;
    if (!('appToken' in value) || value['appToken'] === undefined) return false;
    if (!('priority' in value) || value['priority'] === undefined) return false;
    if (!('decoration' in value) || value['decoration'] === undefined) return false;
    return true;
}

export function NotificationCreateGotifyRequestFromJSON(json: any): NotificationCreateGotifyRequest {
    return NotificationCreateGotifyRequestFromJSONTyped(json, false);
}

export function NotificationCreateGotifyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationCreateGotifyRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'appBuildError': json['appBuildError'],
        'databaseBackup': json['databaseBackup'],
        'dokployRestart': json['dokployRestart'],
        'name': json['name'],
        'appDeploy': json['appDeploy'],
        'dockerCleanup': json['dockerCleanup'],
        'serverUrl': json['serverUrl'],
        'appToken': json['appToken'],
        'priority': json['priority'],
        'decoration': json['decoration'],
    };
}

export function NotificationCreateGotifyRequestToJSON(json: any): NotificationCreateGotifyRequest {
    return NotificationCreateGotifyRequestToJSONTyped(json, false);
}

export function NotificationCreateGotifyRequestToJSONTyped(value?: NotificationCreateGotifyRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appBuildError': value['appBuildError'],
        'databaseBackup': value['databaseBackup'],
        'dokployRestart': value['dokployRestart'],
        'name': value['name'],
        'appDeploy': value['appDeploy'],
        'dockerCleanup': value['dockerCleanup'],
        'serverUrl': value['serverUrl'],
        'appToken': value['appToken'],
        'priority': value['priority'],
        'decoration': value['decoration'],
    };
}

