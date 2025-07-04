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
  BitbucketCreateRequest,
  BitbucketTestConnectionRequest,
  BitbucketUpdateRequest,
  InlineObject,
} from '../models/index';
import {
    BitbucketCreateRequestFromJSON,
    BitbucketCreateRequestToJSON,
    BitbucketTestConnectionRequestFromJSON,
    BitbucketTestConnectionRequestToJSON,
    BitbucketUpdateRequestFromJSON,
    BitbucketUpdateRequestToJSON,
    InlineObjectFromJSON,
    InlineObjectToJSON,
} from '../models/index';

export interface BitbucketCreateOperationRequest {
    bitbucketCreateRequest: BitbucketCreateRequest;
}

export interface BitbucketGetBitbucketBranchesRequest {
    owner: string;
    repo: string;
    bitbucketId?: string;
}

export interface BitbucketGetBitbucketRepositoriesRequest {
    bitbucketId: string;
}

export interface BitbucketOneRequest {
    bitbucketId: string;
}

export interface BitbucketTestConnectionOperationRequest {
    bitbucketTestConnectionRequest: BitbucketTestConnectionRequest;
}

export interface BitbucketUpdateOperationRequest {
    bitbucketUpdateRequest: BitbucketUpdateRequest;
}

/**
 * 
 */
export class BitbucketApi extends runtime.BaseAPI {

    /**
     */
    async bitbucketBitbucketProvidersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/bitbucket.bitbucketProviders`;

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
    async bitbucketBitbucketProviders(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bitbucketBitbucketProvidersRaw(initOverrides);
    }

    /**
     */
    async bitbucketCreateRaw(requestParameters: BitbucketCreateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['bitbucketCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'bitbucketCreateRequest',
                'Required parameter "bitbucketCreateRequest" was null or undefined when calling bitbucketCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/bitbucket.create`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BitbucketCreateRequestToJSON(requestParameters['bitbucketCreateRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async bitbucketCreate(requestParameters: BitbucketCreateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bitbucketCreateRaw(requestParameters, initOverrides);
    }

    /**
     */
    async bitbucketGetBitbucketBranchesRaw(requestParameters: BitbucketGetBitbucketBranchesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['owner'] == null) {
            throw new runtime.RequiredError(
                'owner',
                'Required parameter "owner" was null or undefined when calling bitbucketGetBitbucketBranches().'
            );
        }

        if (requestParameters['repo'] == null) {
            throw new runtime.RequiredError(
                'repo',
                'Required parameter "repo" was null or undefined when calling bitbucketGetBitbucketBranches().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['owner'] != null) {
            queryParameters['owner'] = requestParameters['owner'];
        }

        if (requestParameters['repo'] != null) {
            queryParameters['repo'] = requestParameters['repo'];
        }

        if (requestParameters['bitbucketId'] != null) {
            queryParameters['bitbucketId'] = requestParameters['bitbucketId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/bitbucket.getBitbucketBranches`;

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
    async bitbucketGetBitbucketBranches(requestParameters: BitbucketGetBitbucketBranchesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bitbucketGetBitbucketBranchesRaw(requestParameters, initOverrides);
    }

    /**
     */
    async bitbucketGetBitbucketRepositoriesRaw(requestParameters: BitbucketGetBitbucketRepositoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['bitbucketId'] == null) {
            throw new runtime.RequiredError(
                'bitbucketId',
                'Required parameter "bitbucketId" was null or undefined when calling bitbucketGetBitbucketRepositories().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['bitbucketId'] != null) {
            queryParameters['bitbucketId'] = requestParameters['bitbucketId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/bitbucket.getBitbucketRepositories`;

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
    async bitbucketGetBitbucketRepositories(requestParameters: BitbucketGetBitbucketRepositoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bitbucketGetBitbucketRepositoriesRaw(requestParameters, initOverrides);
    }

    /**
     */
    async bitbucketOneRaw(requestParameters: BitbucketOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['bitbucketId'] == null) {
            throw new runtime.RequiredError(
                'bitbucketId',
                'Required parameter "bitbucketId" was null or undefined when calling bitbucketOne().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['bitbucketId'] != null) {
            queryParameters['bitbucketId'] = requestParameters['bitbucketId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/bitbucket.one`;

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
    async bitbucketOne(requestParameters: BitbucketOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bitbucketOneRaw(requestParameters, initOverrides);
    }

    /**
     */
    async bitbucketTestConnectionRaw(requestParameters: BitbucketTestConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['bitbucketTestConnectionRequest'] == null) {
            throw new runtime.RequiredError(
                'bitbucketTestConnectionRequest',
                'Required parameter "bitbucketTestConnectionRequest" was null or undefined when calling bitbucketTestConnection().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/bitbucket.testConnection`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BitbucketTestConnectionRequestToJSON(requestParameters['bitbucketTestConnectionRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async bitbucketTestConnection(requestParameters: BitbucketTestConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bitbucketTestConnectionRaw(requestParameters, initOverrides);
    }

    /**
     */
    async bitbucketUpdateRaw(requestParameters: BitbucketUpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['bitbucketUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'bitbucketUpdateRequest',
                'Required parameter "bitbucketUpdateRequest" was null or undefined when calling bitbucketUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/bitbucket.update`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BitbucketUpdateRequestToJSON(requestParameters['bitbucketUpdateRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async bitbucketUpdate(requestParameters: BitbucketUpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bitbucketUpdateRaw(requestParameters, initOverrides);
    }

}
