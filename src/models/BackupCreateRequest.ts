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
 * @interface BackupCreateRequest
 */
export interface BackupCreateRequest {
    /**
     * 
     * @type {string}
     * @memberof BackupCreateRequest
     */
    schedule: string;
    /**
     * 
     * @type {boolean}
     * @memberof BackupCreateRequest
     */
    enabled?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof BackupCreateRequest
     */
    prefix: string;
    /**
     * 
     * @type {string}
     * @memberof BackupCreateRequest
     */
    destinationId: string;
    /**
     * 
     * @type {number}
     * @memberof BackupCreateRequest
     */
    keepLatestCount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof BackupCreateRequest
     */
    database: string;
    /**
     * 
     * @type {string}
     * @memberof BackupCreateRequest
     */
    mariadbId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BackupCreateRequest
     */
    mysqlId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BackupCreateRequest
     */
    postgresId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BackupCreateRequest
     */
    mongoId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BackupCreateRequest
     */
    databaseType: BackupCreateRequestDatabaseTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BackupCreateRequest
     */
    userId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BackupCreateRequest
     */
    backupType?: BackupCreateRequestBackupTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BackupCreateRequest
     */
    composeId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BackupCreateRequest
     */
    serviceName?: string | null;
    /**
     * 
     * @type {any}
     * @memberof BackupCreateRequest
     */
    metadata?: any | null;
}


/**
 * @export
 */
export const BackupCreateRequestDatabaseTypeEnum = {
    Postgres: 'postgres',
    Mariadb: 'mariadb',
    Mysql: 'mysql',
    Mongo: 'mongo',
    WebServer: 'web-server'
} as const;
export type BackupCreateRequestDatabaseTypeEnum = typeof BackupCreateRequestDatabaseTypeEnum[keyof typeof BackupCreateRequestDatabaseTypeEnum];

/**
 * @export
 */
export const BackupCreateRequestBackupTypeEnum = {
    Database: 'database',
    Compose: 'compose'
} as const;
export type BackupCreateRequestBackupTypeEnum = typeof BackupCreateRequestBackupTypeEnum[keyof typeof BackupCreateRequestBackupTypeEnum];


/**
 * Check if a given object implements the BackupCreateRequest interface.
 */
export function instanceOfBackupCreateRequest(value: object): value is BackupCreateRequest {
    if (!('schedule' in value) || value['schedule'] === undefined) return false;
    if (!('prefix' in value) || value['prefix'] === undefined) return false;
    if (!('destinationId' in value) || value['destinationId'] === undefined) return false;
    if (!('database' in value) || value['database'] === undefined) return false;
    if (!('databaseType' in value) || value['databaseType'] === undefined) return false;
    return true;
}

export function BackupCreateRequestFromJSON(json: any): BackupCreateRequest {
    return BackupCreateRequestFromJSONTyped(json, false);
}

export function BackupCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackupCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'schedule': json['schedule'],
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'prefix': json['prefix'],
        'destinationId': json['destinationId'],
        'keepLatestCount': json['keepLatestCount'] == null ? undefined : json['keepLatestCount'],
        'database': json['database'],
        'mariadbId': json['mariadbId'] == null ? undefined : json['mariadbId'],
        'mysqlId': json['mysqlId'] == null ? undefined : json['mysqlId'],
        'postgresId': json['postgresId'] == null ? undefined : json['postgresId'],
        'mongoId': json['mongoId'] == null ? undefined : json['mongoId'],
        'databaseType': json['databaseType'],
        'userId': json['userId'] == null ? undefined : json['userId'],
        'backupType': json['backupType'] == null ? undefined : json['backupType'],
        'composeId': json['composeId'] == null ? undefined : json['composeId'],
        'serviceName': json['serviceName'] == null ? undefined : json['serviceName'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
    };
}

export function BackupCreateRequestToJSON(json: any): BackupCreateRequest {
    return BackupCreateRequestToJSONTyped(json, false);
}

export function BackupCreateRequestToJSONTyped(value?: BackupCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schedule': value['schedule'],
        'enabled': value['enabled'],
        'prefix': value['prefix'],
        'destinationId': value['destinationId'],
        'keepLatestCount': value['keepLatestCount'],
        'database': value['database'],
        'mariadbId': value['mariadbId'],
        'mysqlId': value['mysqlId'],
        'postgresId': value['postgresId'],
        'mongoId': value['mongoId'],
        'databaseType': value['databaseType'],
        'userId': value['userId'],
        'backupType': value['backupType'],
        'composeId': value['composeId'],
        'serviceName': value['serviceName'],
        'metadata': value['metadata'],
    };
}

