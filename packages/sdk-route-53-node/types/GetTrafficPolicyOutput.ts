import {_UnmarshalledTrafficPolicy} from './_TrafficPolicy';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface GetTrafficPolicyOutput {
    /**
     * <p>A complex type that contains settings for the specified traffic policy.</p>
     */
    TrafficPolicy: _UnmarshalledTrafficPolicy;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}