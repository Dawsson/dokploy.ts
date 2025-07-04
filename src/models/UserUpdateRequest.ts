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
import type { UserUpdateRequestMetricsConfig } from './UserUpdateRequestMetricsConfig';
import {
    UserUpdateRequestMetricsConfigFromJSON,
    UserUpdateRequestMetricsConfigFromJSONTyped,
    UserUpdateRequestMetricsConfigToJSON,
    UserUpdateRequestMetricsConfigToJSONTyped,
} from './UserUpdateRequestMetricsConfig';

/**
 * 
 * @export
 * @interface UserUpdateRequest
 */
export interface UserUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserUpdateRequest
     */
    isRegistered?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    expirationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    createdAt2?: string;
    /**
     * 
     * @type {Date}
     * @memberof UserUpdateRequest
     */
    createdAt?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserUpdateRequest
     */
    twoFactorEnabled?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    email?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserUpdateRequest
     */
    emailVerified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    image?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserUpdateRequest
     */
    banned?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    banReason?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof UserUpdateRequest
     */
    banExpires?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof UserUpdateRequest
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    serverIp?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    certificateType?: UserUpdateRequestCertificateTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof UserUpdateRequest
     */
    https?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    host?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    letsEncryptEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    sshPrivateKey?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserUpdateRequest
     */
    enableDockerCleanup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    logCleanupCron?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserUpdateRequest
     */
    enablePaidFeatures?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserUpdateRequest
     */
    allowImpersonation?: boolean;
    /**
     * 
     * @type {UserUpdateRequestMetricsConfig}
     * @memberof UserUpdateRequest
     */
    metricsConfig?: UserUpdateRequestMetricsConfig;
    /**
     * 
     * @type {boolean}
     * @memberof UserUpdateRequest
     */
    cleanupCacheApplications?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserUpdateRequest
     */
    cleanupCacheOnPreviews?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserUpdateRequest
     */
    cleanupCacheOnCompose?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    stripeCustomerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    stripeSubscriptionId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UserUpdateRequest
     */
    serversQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    currentPassword?: string;
}


/**
 * @export
 */
export const UserUpdateRequestCertificateTypeEnum = {
    Letsencrypt: 'letsencrypt',
    None: 'none',
    Custom: 'custom'
} as const;
export type UserUpdateRequestCertificateTypeEnum = typeof UserUpdateRequestCertificateTypeEnum[keyof typeof UserUpdateRequestCertificateTypeEnum];


/**
 * Check if a given object implements the UserUpdateRequest interface.
 */
export function instanceOfUserUpdateRequest(value: object): value is UserUpdateRequest {
    return true;
}

export function UserUpdateRequestFromJSON(json: any): UserUpdateRequest {
    return UserUpdateRequestFromJSONTyped(json, false);
}

export function UserUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'isRegistered': json['isRegistered'] == null ? undefined : json['isRegistered'],
        'expirationDate': json['expirationDate'] == null ? undefined : json['expirationDate'],
        'createdAt2': json['createdAt2'] == null ? undefined : json['createdAt2'],
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'twoFactorEnabled': json['twoFactorEnabled'] == null ? undefined : json['twoFactorEnabled'],
        'email': json['email'] == null ? undefined : json['email'],
        'emailVerified': json['emailVerified'] == null ? undefined : json['emailVerified'],
        'image': json['image'] == null ? undefined : json['image'],
        'banned': json['banned'] == null ? undefined : json['banned'],
        'banReason': json['banReason'] == null ? undefined : json['banReason'],
        'banExpires': json['banExpires'] == null ? undefined : (new Date(json['banExpires'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'serverIp': json['serverIp'] == null ? undefined : json['serverIp'],
        'certificateType': json['certificateType'] == null ? undefined : json['certificateType'],
        'https': json['https'] == null ? undefined : json['https'],
        'host': json['host'] == null ? undefined : json['host'],
        'letsEncryptEmail': json['letsEncryptEmail'] == null ? undefined : json['letsEncryptEmail'],
        'sshPrivateKey': json['sshPrivateKey'] == null ? undefined : json['sshPrivateKey'],
        'enableDockerCleanup': json['enableDockerCleanup'] == null ? undefined : json['enableDockerCleanup'],
        'logCleanupCron': json['logCleanupCron'] == null ? undefined : json['logCleanupCron'],
        'enablePaidFeatures': json['enablePaidFeatures'] == null ? undefined : json['enablePaidFeatures'],
        'allowImpersonation': json['allowImpersonation'] == null ? undefined : json['allowImpersonation'],
        'metricsConfig': json['metricsConfig'] == null ? undefined : UserUpdateRequestMetricsConfigFromJSON(json['metricsConfig']),
        'cleanupCacheApplications': json['cleanupCacheApplications'] == null ? undefined : json['cleanupCacheApplications'],
        'cleanupCacheOnPreviews': json['cleanupCacheOnPreviews'] == null ? undefined : json['cleanupCacheOnPreviews'],
        'cleanupCacheOnCompose': json['cleanupCacheOnCompose'] == null ? undefined : json['cleanupCacheOnCompose'],
        'stripeCustomerId': json['stripeCustomerId'] == null ? undefined : json['stripeCustomerId'],
        'stripeSubscriptionId': json['stripeSubscriptionId'] == null ? undefined : json['stripeSubscriptionId'],
        'serversQuantity': json['serversQuantity'] == null ? undefined : json['serversQuantity'],
        'password': json['password'] == null ? undefined : json['password'],
        'currentPassword': json['currentPassword'] == null ? undefined : json['currentPassword'],
    };
}

export function UserUpdateRequestToJSON(json: any): UserUpdateRequest {
    return UserUpdateRequestToJSONTyped(json, false);
}

export function UserUpdateRequestToJSONTyped(value?: UserUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'isRegistered': value['isRegistered'],
        'expirationDate': value['expirationDate'],
        'createdAt2': value['createdAt2'],
        'createdAt': value['createdAt'] === null ? null : ((value['createdAt'] as any)?.toISOString()),
        'twoFactorEnabled': value['twoFactorEnabled'],
        'email': value['email'],
        'emailVerified': value['emailVerified'],
        'image': value['image'],
        'banned': value['banned'],
        'banReason': value['banReason'],
        'banExpires': value['banExpires'] === null ? null : ((value['banExpires'] as any)?.toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'serverIp': value['serverIp'],
        'certificateType': value['certificateType'],
        'https': value['https'],
        'host': value['host'],
        'letsEncryptEmail': value['letsEncryptEmail'],
        'sshPrivateKey': value['sshPrivateKey'],
        'enableDockerCleanup': value['enableDockerCleanup'],
        'logCleanupCron': value['logCleanupCron'],
        'enablePaidFeatures': value['enablePaidFeatures'],
        'allowImpersonation': value['allowImpersonation'],
        'metricsConfig': UserUpdateRequestMetricsConfigToJSON(value['metricsConfig']),
        'cleanupCacheApplications': value['cleanupCacheApplications'],
        'cleanupCacheOnPreviews': value['cleanupCacheOnPreviews'],
        'cleanupCacheOnCompose': value['cleanupCacheOnCompose'],
        'stripeCustomerId': value['stripeCustomerId'],
        'stripeSubscriptionId': value['stripeSubscriptionId'],
        'serversQuantity': value['serversQuantity'],
        'password': value['password'],
        'currentPassword': value['currentPassword'],
    };
}

