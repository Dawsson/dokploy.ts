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
 * @interface ProjectDuplicateRequestSelectedServicesInner
 */
export interface ProjectDuplicateRequestSelectedServicesInner {
    /**
     * 
     * @type {string}
     * @memberof ProjectDuplicateRequestSelectedServicesInner
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectDuplicateRequestSelectedServicesInner
     */
    type: ProjectDuplicateRequestSelectedServicesInnerTypeEnum;
}


/**
 * @export
 */
export const ProjectDuplicateRequestSelectedServicesInnerTypeEnum = {
    Application: 'application',
    Postgres: 'postgres',
    Mariadb: 'mariadb',
    Mongo: 'mongo',
    Mysql: 'mysql',
    Redis: 'redis',
    Compose: 'compose'
} as const;
export type ProjectDuplicateRequestSelectedServicesInnerTypeEnum = typeof ProjectDuplicateRequestSelectedServicesInnerTypeEnum[keyof typeof ProjectDuplicateRequestSelectedServicesInnerTypeEnum];


/**
 * Check if a given object implements the ProjectDuplicateRequestSelectedServicesInner interface.
 */
export function instanceOfProjectDuplicateRequestSelectedServicesInner(value: object): value is ProjectDuplicateRequestSelectedServicesInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function ProjectDuplicateRequestSelectedServicesInnerFromJSON(json: any): ProjectDuplicateRequestSelectedServicesInner {
    return ProjectDuplicateRequestSelectedServicesInnerFromJSONTyped(json, false);
}

export function ProjectDuplicateRequestSelectedServicesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectDuplicateRequestSelectedServicesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
    };
}

export function ProjectDuplicateRequestSelectedServicesInnerToJSON(json: any): ProjectDuplicateRequestSelectedServicesInner {
    return ProjectDuplicateRequestSelectedServicesInnerToJSONTyped(json, false);
}

export function ProjectDuplicateRequestSelectedServicesInnerToJSONTyped(value?: ProjectDuplicateRequestSelectedServicesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'type': value['type'],
    };
}

