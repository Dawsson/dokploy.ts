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
 * @interface NotificationCreateEmailRequest
 */
export interface NotificationCreateEmailRequest {
    /**
     * 
     * @type {boolean}
     * @memberof NotificationCreateEmailRequest
     */
    appBuildError: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationCreateEmailRequest
     */
    databaseBackup: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationCreateEmailRequest
     */
    dokployRestart: boolean;
    /**
     * 
     * @type {string}
     * @memberof NotificationCreateEmailRequest
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationCreateEmailRequest
     */
    appDeploy: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationCreateEmailRequest
     */
    dockerCleanup: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationCreateEmailRequest
     */
    serverThreshold: boolean;
    /**
     * 
     * @type {string}
     * @memberof NotificationCreateEmailRequest
     */
    smtpServer: string;
    /**
     * 
     * @type {number}
     * @memberof NotificationCreateEmailRequest
     */
    smtpPort: number;
    /**
     * 
     * @type {string}
     * @memberof NotificationCreateEmailRequest
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationCreateEmailRequest
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationCreateEmailRequest
     */
    fromAddress: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof NotificationCreateEmailRequest
     */
    toAddresses: Array<string>;
}

/**
 * Check if a given object implements the NotificationCreateEmailRequest interface.
 */
export function instanceOfNotificationCreateEmailRequest(value: object): value is NotificationCreateEmailRequest {
    if (!('appBuildError' in value) || value['appBuildError'] === undefined) return false;
    if (!('databaseBackup' in value) || value['databaseBackup'] === undefined) return false;
    if (!('dokployRestart' in value) || value['dokployRestart'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('appDeploy' in value) || value['appDeploy'] === undefined) return false;
    if (!('dockerCleanup' in value) || value['dockerCleanup'] === undefined) return false;
    if (!('serverThreshold' in value) || value['serverThreshold'] === undefined) return false;
    if (!('smtpServer' in value) || value['smtpServer'] === undefined) return false;
    if (!('smtpPort' in value) || value['smtpPort'] === undefined) return false;
    if (!('username' in value) || value['username'] === undefined) return false;
    if (!('password' in value) || value['password'] === undefined) return false;
    if (!('fromAddress' in value) || value['fromAddress'] === undefined) return false;
    if (!('toAddresses' in value) || value['toAddresses'] === undefined) return false;
    return true;
}

export function NotificationCreateEmailRequestFromJSON(json: any): NotificationCreateEmailRequest {
    return NotificationCreateEmailRequestFromJSONTyped(json, false);
}

export function NotificationCreateEmailRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationCreateEmailRequest {
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
        'serverThreshold': json['serverThreshold'],
        'smtpServer': json['smtpServer'],
        'smtpPort': json['smtpPort'],
        'username': json['username'],
        'password': json['password'],
        'fromAddress': json['fromAddress'],
        'toAddresses': json['toAddresses'],
    };
}

export function NotificationCreateEmailRequestToJSON(json: any): NotificationCreateEmailRequest {
    return NotificationCreateEmailRequestToJSONTyped(json, false);
}

export function NotificationCreateEmailRequestToJSONTyped(value?: NotificationCreateEmailRequest | null, ignoreDiscriminator: boolean = false): any {
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
        'serverThreshold': value['serverThreshold'],
        'smtpServer': value['smtpServer'],
        'smtpPort': value['smtpPort'],
        'username': value['username'],
        'password': value['password'],
        'fromAddress': value['fromAddress'],
        'toAddresses': value['toAddresses'],
    };
}

