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
 * @interface DockerGetContainersByAppNameMatchAppTypeParameter
 */
export interface DockerGetContainersByAppNameMatchAppTypeParameter {
}

/**
 * Check if a given object implements the DockerGetContainersByAppNameMatchAppTypeParameter interface.
 */
export function instanceOfDockerGetContainersByAppNameMatchAppTypeParameter(value: object): value is DockerGetContainersByAppNameMatchAppTypeParameter {
    return true;
}

export function DockerGetContainersByAppNameMatchAppTypeParameterFromJSON(json: any): DockerGetContainersByAppNameMatchAppTypeParameter {
    return DockerGetContainersByAppNameMatchAppTypeParameterFromJSONTyped(json, false);
}

export function DockerGetContainersByAppNameMatchAppTypeParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): DockerGetContainersByAppNameMatchAppTypeParameter {
    return json;
}

export function DockerGetContainersByAppNameMatchAppTypeParameterToJSON(json: any): DockerGetContainersByAppNameMatchAppTypeParameter {
    return DockerGetContainersByAppNameMatchAppTypeParameterToJSONTyped(json, false);
}

export function DockerGetContainersByAppNameMatchAppTypeParameterToJSONTyped(value?: DockerGetContainersByAppNameMatchAppTypeParameter | null, ignoreDiscriminator: boolean = false): any {
    return value;
}

