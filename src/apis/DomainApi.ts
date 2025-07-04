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


import * as runtime from '../runtime';
import type {
  DomainCreateRequest,
  DomainDeleteRequest,
  DomainGenerateDomainRequest,
  DomainUpdateRequest,
  DomainValidateDomainRequest,
  InlineObject,
} from '../models/index';
import {
    DomainCreateRequestFromJSON,
    DomainCreateRequestToJSON,
    DomainDeleteRequestFromJSON,
    DomainDeleteRequestToJSON,
    DomainGenerateDomainRequestFromJSON,
    DomainGenerateDomainRequestToJSON,
    DomainUpdateRequestFromJSON,
    DomainUpdateRequestToJSON,
    DomainValidateDomainRequestFromJSON,
    DomainValidateDomainRequestToJSON,
    InlineObjectFromJSON,
    InlineObjectToJSON,
} from '../models/index';

export interface DomainByApplicationIdRequest {
    applicationId: string;
}

export interface DomainByComposeIdRequest {
    composeId: string;
}

export interface DomainCanGenerateTraefikMeDomainsRequest {
    serverId: string;
}

export interface DomainCreateOperationRequest {
    domainCreateRequest: DomainCreateRequest;
}

export interface DomainDeleteOperationRequest {
    domainDeleteRequest: DomainDeleteRequest;
}

export interface DomainGenerateDomainOperationRequest {
    domainGenerateDomainRequest: DomainGenerateDomainRequest;
}

export interface DomainOneRequest {
    domainId: string;
}

export interface DomainUpdateOperationRequest {
    domainUpdateRequest: DomainUpdateRequest;
}

export interface DomainValidateDomainOperationRequest {
    domainValidateDomainRequest: DomainValidateDomainRequest;
}

/**
 * 
 */
export class DomainApi extends runtime.BaseAPI {

    /**
     */
    async domainByApplicationIdRaw(requestParameters: DomainByApplicationIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['applicationId'] == null) {
            throw new runtime.RequiredError(
                'applicationId',
                'Required parameter "applicationId" was null or undefined when calling domainByApplicationId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['applicationId'] != null) {
            queryParameters['applicationId'] = requestParameters['applicationId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/domain.byApplicationId`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async domainByApplicationId(requestParameters: DomainByApplicationIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.domainByApplicationIdRaw(requestParameters, initOverrides);
    }

    /**
     */
    async domainByComposeIdRaw(requestParameters: DomainByComposeIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['composeId'] == null) {
            throw new runtime.RequiredError(
                'composeId',
                'Required parameter "composeId" was null or undefined when calling domainByComposeId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['composeId'] != null) {
            queryParameters['composeId'] = requestParameters['composeId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/domain.byComposeId`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async domainByComposeId(requestParameters: DomainByComposeIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.domainByComposeIdRaw(requestParameters, initOverrides);
    }

    /**
     */
    async domainCanGenerateTraefikMeDomainsRaw(requestParameters: DomainCanGenerateTraefikMeDomainsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['serverId'] == null) {
            throw new runtime.RequiredError(
                'serverId',
                'Required parameter "serverId" was null or undefined when calling domainCanGenerateTraefikMeDomains().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['serverId'] != null) {
            queryParameters['serverId'] = requestParameters['serverId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/domain.canGenerateTraefikMeDomains`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async domainCanGenerateTraefikMeDomains(requestParameters: DomainCanGenerateTraefikMeDomainsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.domainCanGenerateTraefikMeDomainsRaw(requestParameters, initOverrides);
    }

    /**
     */
    async domainCreateRaw(requestParameters: DomainCreateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['domainCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'domainCreateRequest',
                'Required parameter "domainCreateRequest" was null or undefined when calling domainCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/domain.create`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DomainCreateRequestToJSON(requestParameters['domainCreateRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async domainCreate(requestParameters: DomainCreateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.domainCreateRaw(requestParameters, initOverrides);
    }

    /**
     */
    async domainDeleteRaw(requestParameters: DomainDeleteOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['domainDeleteRequest'] == null) {
            throw new runtime.RequiredError(
                'domainDeleteRequest',
                'Required parameter "domainDeleteRequest" was null or undefined when calling domainDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/domain.delete`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DomainDeleteRequestToJSON(requestParameters['domainDeleteRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async domainDelete(requestParameters: DomainDeleteOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.domainDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async domainGenerateDomainRaw(requestParameters: DomainGenerateDomainOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['domainGenerateDomainRequest'] == null) {
            throw new runtime.RequiredError(
                'domainGenerateDomainRequest',
                'Required parameter "domainGenerateDomainRequest" was null or undefined when calling domainGenerateDomain().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/domain.generateDomain`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DomainGenerateDomainRequestToJSON(requestParameters['domainGenerateDomainRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async domainGenerateDomain(requestParameters: DomainGenerateDomainOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.domainGenerateDomainRaw(requestParameters, initOverrides);
    }

    /**
     */
    async domainOneRaw(requestParameters: DomainOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['domainId'] == null) {
            throw new runtime.RequiredError(
                'domainId',
                'Required parameter "domainId" was null or undefined when calling domainOne().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['domainId'] != null) {
            queryParameters['domainId'] = requestParameters['domainId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/domain.one`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async domainOne(requestParameters: DomainOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.domainOneRaw(requestParameters, initOverrides);
    }

    /**
     */
    async domainUpdateRaw(requestParameters: DomainUpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['domainUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'domainUpdateRequest',
                'Required parameter "domainUpdateRequest" was null or undefined when calling domainUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/domain.update`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DomainUpdateRequestToJSON(requestParameters['domainUpdateRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async domainUpdate(requestParameters: DomainUpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.domainUpdateRaw(requestParameters, initOverrides);
    }

    /**
     */
    async domainValidateDomainRaw(requestParameters: DomainValidateDomainOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['domainValidateDomainRequest'] == null) {
            throw new runtime.RequiredError(
                'domainValidateDomainRequest',
                'Required parameter "domainValidateDomainRequest" was null or undefined when calling domainValidateDomain().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/domain.validateDomain`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DomainValidateDomainRequestToJSON(requestParameters['domainValidateDomainRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async domainValidateDomain(requestParameters: DomainValidateDomainOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.domainValidateDomainRaw(requestParameters, initOverrides);
    }

}
