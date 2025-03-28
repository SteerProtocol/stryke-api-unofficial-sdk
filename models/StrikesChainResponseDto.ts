/* tslint:disable */
/* eslint-disable */
/**
 * Stryke API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { StrikesChainDto } from './StrikesChainDto';
import {
    StrikesChainDtoFromJSON,
    StrikesChainDtoFromJSONTyped,
    StrikesChainDtoToJSON,
    StrikesChainDtoToJSONTyped,
} from './StrikesChainDto';

/**
 * 
 * @export
 * @interface StrikesChainResponseDto
 */
export interface StrikesChainResponseDto {
    /**
     * 
     * @type {StrikesChainDto}
     * @memberof StrikesChainResponseDto
     */
    readonly strikePrice: StrikesChainDto;
}

/**
 * Check if a given object implements the StrikesChainResponseDto interface.
 */
export function instanceOfStrikesChainResponseDto(value: object): value is StrikesChainResponseDto {
    if (!('strikePrice' in value) || value['strikePrice'] === undefined) return false;
    return true;
}

export function StrikesChainResponseDtoFromJSON(json: any): StrikesChainResponseDto {
    return StrikesChainResponseDtoFromJSONTyped(json, false);
}

export function StrikesChainResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrikesChainResponseDto {
    if (json == null) {
        return json;
    }
    return {
        
        'strikePrice': StrikesChainDtoFromJSON(json['&lt;strike price&gt;']),
    };
}

export function StrikesChainResponseDtoToJSON(json: any): StrikesChainResponseDto {
    return StrikesChainResponseDtoToJSONTyped(json, false);
}

export function StrikesChainResponseDtoToJSONTyped(value?: Omit<StrikesChainResponseDto, '&lt;strike price&gt;'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

