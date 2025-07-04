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
 * @interface NotificationTestEmailConnectionRequest
 */
export interface NotificationTestEmailConnectionRequest {
    /**
     * 
     * @type {string}
     * @memberof NotificationTestEmailConnectionRequest
     */
    smtpServer: string;
    /**
     * 
     * @type {number}
     * @memberof NotificationTestEmailConnectionRequest
     */
    smtpPort: number;
    /**
     * 
     * @type {string}
     * @memberof NotificationTestEmailConnectionRequest
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationTestEmailConnectionRequest
     */
    password: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof NotificationTestEmailConnectionRequest
     */
    toAddresses: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof NotificationTestEmailConnectionRequest
     */
    fromAddress: string;
}

/**
 * Check if a given object implements the NotificationTestEmailConnectionRequest interface.
 */
export function instanceOfNotificationTestEmailConnectionRequest(value: object): value is NotificationTestEmailConnectionRequest {
    if (!('smtpServer' in value) || value['smtpServer'] === undefined) return false;
    if (!('smtpPort' in value) || value['smtpPort'] === undefined) return false;
    if (!('username' in value) || value['username'] === undefined) return false;
    if (!('password' in value) || value['password'] === undefined) return false;
    if (!('toAddresses' in value) || value['toAddresses'] === undefined) return false;
    if (!('fromAddress' in value) || value['fromAddress'] === undefined) return false;
    return true;
}

export function NotificationTestEmailConnectionRequestFromJSON(json: any): NotificationTestEmailConnectionRequest {
    return NotificationTestEmailConnectionRequestFromJSONTyped(json, false);
}

export function NotificationTestEmailConnectionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationTestEmailConnectionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'smtpServer': json['smtpServer'],
        'smtpPort': json['smtpPort'],
        'username': json['username'],
        'password': json['password'],
        'toAddresses': json['toAddresses'],
        'fromAddress': json['fromAddress'],
    };
}

export function NotificationTestEmailConnectionRequestToJSON(json: any): NotificationTestEmailConnectionRequest {
    return NotificationTestEmailConnectionRequestToJSONTyped(json, false);
}

export function NotificationTestEmailConnectionRequestToJSONTyped(value?: NotificationTestEmailConnectionRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'smtpServer': value['smtpServer'],
        'smtpPort': value['smtpPort'],
        'username': value['username'],
        'password': value['password'],
        'toAddresses': value['toAddresses'],
        'fromAddress': value['fromAddress'],
    };
}

