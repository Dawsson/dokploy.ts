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
 * @interface ApplicationSaveBuildTypeRequest
 */
export interface ApplicationSaveBuildTypeRequest {
    /**
     * 
     * @type {string}
     * @memberof ApplicationSaveBuildTypeRequest
     */
    applicationId: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationSaveBuildTypeRequest
     */
    buildType: ApplicationSaveBuildTypeRequestBuildTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ApplicationSaveBuildTypeRequest
     */
    dockerfile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationSaveBuildTypeRequest
     */
    dockerContextPath: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationSaveBuildTypeRequest
     */
    dockerBuildStage: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationSaveBuildTypeRequest
     */
    herokuVersion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationSaveBuildTypeRequest
     */
    publishDirectory?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationSaveBuildTypeRequest
     */
    isStaticSpa?: boolean | null;
}


/**
 * @export
 */
export const ApplicationSaveBuildTypeRequestBuildTypeEnum = {
    Dockerfile: 'dockerfile',
    HerokuBuildpacks: 'heroku_buildpacks',
    PaketoBuildpacks: 'paketo_buildpacks',
    Nixpacks: 'nixpacks',
    Static: 'static',
    Railpack: 'railpack'
} as const;
export type ApplicationSaveBuildTypeRequestBuildTypeEnum = typeof ApplicationSaveBuildTypeRequestBuildTypeEnum[keyof typeof ApplicationSaveBuildTypeRequestBuildTypeEnum];


/**
 * Check if a given object implements the ApplicationSaveBuildTypeRequest interface.
 */
export function instanceOfApplicationSaveBuildTypeRequest(value: object): value is ApplicationSaveBuildTypeRequest {
    if (!('applicationId' in value) || value['applicationId'] === undefined) return false;
    if (!('buildType' in value) || value['buildType'] === undefined) return false;
    if (!('dockerContextPath' in value) || value['dockerContextPath'] === undefined) return false;
    if (!('dockerBuildStage' in value) || value['dockerBuildStage'] === undefined) return false;
    return true;
}

export function ApplicationSaveBuildTypeRequestFromJSON(json: any): ApplicationSaveBuildTypeRequest {
    return ApplicationSaveBuildTypeRequestFromJSONTyped(json, false);
}

export function ApplicationSaveBuildTypeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationSaveBuildTypeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'applicationId': json['applicationId'],
        'buildType': json['buildType'],
        'dockerfile': json['dockerfile'] == null ? undefined : json['dockerfile'],
        'dockerContextPath': json['dockerContextPath'],
        'dockerBuildStage': json['dockerBuildStage'],
        'herokuVersion': json['herokuVersion'] == null ? undefined : json['herokuVersion'],
        'publishDirectory': json['publishDirectory'] == null ? undefined : json['publishDirectory'],
        'isStaticSpa': json['isStaticSpa'] == null ? undefined : json['isStaticSpa'],
    };
}

export function ApplicationSaveBuildTypeRequestToJSON(json: any): ApplicationSaveBuildTypeRequest {
    return ApplicationSaveBuildTypeRequestToJSONTyped(json, false);
}

export function ApplicationSaveBuildTypeRequestToJSONTyped(value?: ApplicationSaveBuildTypeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'applicationId': value['applicationId'],
        'buildType': value['buildType'],
        'dockerfile': value['dockerfile'],
        'dockerContextPath': value['dockerContextPath'],
        'dockerBuildStage': value['dockerBuildStage'],
        'herokuVersion': value['herokuVersion'],
        'publishDirectory': value['publishDirectory'],
        'isStaticSpa': value['isStaticSpa'],
    };
}

