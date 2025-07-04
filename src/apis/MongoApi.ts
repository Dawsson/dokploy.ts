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
  InlineObject,
  MongoChangeStatusRequest,
  MongoCreateRequest,
  MongoMoveRequest,
  MongoReloadRequest,
  MongoSaveEnvironmentRequest,
  MongoSaveExternalPortRequest,
  MongoStartRequest,
  MongoUpdateRequest,
} from '../models/index';
import {
    InlineObjectFromJSON,
    InlineObjectToJSON,
    MongoChangeStatusRequestFromJSON,
    MongoChangeStatusRequestToJSON,
    MongoCreateRequestFromJSON,
    MongoCreateRequestToJSON,
    MongoMoveRequestFromJSON,
    MongoMoveRequestToJSON,
    MongoReloadRequestFromJSON,
    MongoReloadRequestToJSON,
    MongoSaveEnvironmentRequestFromJSON,
    MongoSaveEnvironmentRequestToJSON,
    MongoSaveExternalPortRequestFromJSON,
    MongoSaveExternalPortRequestToJSON,
    MongoStartRequestFromJSON,
    MongoStartRequestToJSON,
    MongoUpdateRequestFromJSON,
    MongoUpdateRequestToJSON,
} from '../models/index';

export interface MongoChangeStatusOperationRequest {
    mongoChangeStatusRequest: MongoChangeStatusRequest;
}

export interface MongoCreateOperationRequest {
    mongoCreateRequest: MongoCreateRequest;
}

export interface MongoDeployRequest {
    mongoStartRequest: MongoStartRequest;
}

export interface MongoMoveOperationRequest {
    mongoMoveRequest: MongoMoveRequest;
}

export interface MongoOneRequest {
    mongoId: string;
}

export interface MongoRebuildRequest {
    mongoStartRequest: MongoStartRequest;
}

export interface MongoReloadOperationRequest {
    mongoReloadRequest: MongoReloadRequest;
}

export interface MongoRemoveRequest {
    mongoStartRequest: MongoStartRequest;
}

export interface MongoSaveEnvironmentOperationRequest {
    mongoSaveEnvironmentRequest: MongoSaveEnvironmentRequest;
}

export interface MongoSaveExternalPortOperationRequest {
    mongoSaveExternalPortRequest: MongoSaveExternalPortRequest;
}

export interface MongoStartOperationRequest {
    mongoStartRequest: MongoStartRequest;
}

export interface MongoStopRequest {
    mongoStartRequest: MongoStartRequest;
}

export interface MongoUpdateOperationRequest {
    mongoUpdateRequest: MongoUpdateRequest;
}

/**
 * 
 */
export class MongoApi extends runtime.BaseAPI {

    /**
     */
    async mongoChangeStatusRaw(requestParameters: MongoChangeStatusOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['mongoChangeStatusRequest'] == null) {
            throw new runtime.RequiredError(
                'mongoChangeStatusRequest',
                'Required parameter "mongoChangeStatusRequest" was null or undefined when calling mongoChangeStatus().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/mongo.changeStatus`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MongoChangeStatusRequestToJSON(requestParameters['mongoChangeStatusRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mongoChangeStatus(requestParameters: MongoChangeStatusOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mongoChangeStatusRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mongoCreateRaw(requestParameters: MongoCreateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['mongoCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'mongoCreateRequest',
                'Required parameter "mongoCreateRequest" was null or undefined when calling mongoCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/mongo.create`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MongoCreateRequestToJSON(requestParameters['mongoCreateRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mongoCreate(requestParameters: MongoCreateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mongoCreateRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mongoDeployRaw(requestParameters: MongoDeployRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['mongoStartRequest'] == null) {
            throw new runtime.RequiredError(
                'mongoStartRequest',
                'Required parameter "mongoStartRequest" was null or undefined when calling mongoDeploy().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/mongo.deploy`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MongoStartRequestToJSON(requestParameters['mongoStartRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mongoDeploy(requestParameters: MongoDeployRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mongoDeployRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mongoMoveRaw(requestParameters: MongoMoveOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['mongoMoveRequest'] == null) {
            throw new runtime.RequiredError(
                'mongoMoveRequest',
                'Required parameter "mongoMoveRequest" was null or undefined when calling mongoMove().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/mongo.move`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MongoMoveRequestToJSON(requestParameters['mongoMoveRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mongoMove(requestParameters: MongoMoveOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mongoMoveRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mongoOneRaw(requestParameters: MongoOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['mongoId'] == null) {
            throw new runtime.RequiredError(
                'mongoId',
                'Required parameter "mongoId" was null or undefined when calling mongoOne().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['mongoId'] != null) {
            queryParameters['mongoId'] = requestParameters['mongoId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/mongo.one`;

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
    async mongoOne(requestParameters: MongoOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mongoOneRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mongoRebuildRaw(requestParameters: MongoRebuildRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['mongoStartRequest'] == null) {
            throw new runtime.RequiredError(
                'mongoStartRequest',
                'Required parameter "mongoStartRequest" was null or undefined when calling mongoRebuild().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/mongo.rebuild`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MongoStartRequestToJSON(requestParameters['mongoStartRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mongoRebuild(requestParameters: MongoRebuildRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mongoRebuildRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mongoReloadRaw(requestParameters: MongoReloadOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['mongoReloadRequest'] == null) {
            throw new runtime.RequiredError(
                'mongoReloadRequest',
                'Required parameter "mongoReloadRequest" was null or undefined when calling mongoReload().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/mongo.reload`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MongoReloadRequestToJSON(requestParameters['mongoReloadRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mongoReload(requestParameters: MongoReloadOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mongoReloadRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mongoRemoveRaw(requestParameters: MongoRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['mongoStartRequest'] == null) {
            throw new runtime.RequiredError(
                'mongoStartRequest',
                'Required parameter "mongoStartRequest" was null or undefined when calling mongoRemove().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/mongo.remove`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MongoStartRequestToJSON(requestParameters['mongoStartRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mongoRemove(requestParameters: MongoRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mongoRemoveRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mongoSaveEnvironmentRaw(requestParameters: MongoSaveEnvironmentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['mongoSaveEnvironmentRequest'] == null) {
            throw new runtime.RequiredError(
                'mongoSaveEnvironmentRequest',
                'Required parameter "mongoSaveEnvironmentRequest" was null or undefined when calling mongoSaveEnvironment().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/mongo.saveEnvironment`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MongoSaveEnvironmentRequestToJSON(requestParameters['mongoSaveEnvironmentRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mongoSaveEnvironment(requestParameters: MongoSaveEnvironmentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mongoSaveEnvironmentRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mongoSaveExternalPortRaw(requestParameters: MongoSaveExternalPortOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['mongoSaveExternalPortRequest'] == null) {
            throw new runtime.RequiredError(
                'mongoSaveExternalPortRequest',
                'Required parameter "mongoSaveExternalPortRequest" was null or undefined when calling mongoSaveExternalPort().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/mongo.saveExternalPort`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MongoSaveExternalPortRequestToJSON(requestParameters['mongoSaveExternalPortRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mongoSaveExternalPort(requestParameters: MongoSaveExternalPortOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mongoSaveExternalPortRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mongoStartRaw(requestParameters: MongoStartOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['mongoStartRequest'] == null) {
            throw new runtime.RequiredError(
                'mongoStartRequest',
                'Required parameter "mongoStartRequest" was null or undefined when calling mongoStart().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/mongo.start`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MongoStartRequestToJSON(requestParameters['mongoStartRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mongoStart(requestParameters: MongoStartOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mongoStartRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mongoStopRaw(requestParameters: MongoStopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['mongoStartRequest'] == null) {
            throw new runtime.RequiredError(
                'mongoStartRequest',
                'Required parameter "mongoStartRequest" was null or undefined when calling mongoStop().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/mongo.stop`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MongoStartRequestToJSON(requestParameters['mongoStartRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mongoStop(requestParameters: MongoStopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mongoStopRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mongoUpdateRaw(requestParameters: MongoUpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['mongoUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'mongoUpdateRequest',
                'Required parameter "mongoUpdateRequest" was null or undefined when calling mongoUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKey authentication
        }


        let urlPath = `/mongo.update`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MongoUpdateRequestToJSON(requestParameters['mongoUpdateRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mongoUpdate(requestParameters: MongoUpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mongoUpdateRaw(requestParameters, initOverrides);
    }

}
