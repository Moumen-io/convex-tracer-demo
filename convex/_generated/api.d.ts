/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as http from "../http.js";
import type * as seed from "../seed.js";
import type * as shop from "../shop.js";
import type * as tracer from "../tracer.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  http: typeof http;
  seed: typeof seed;
  shop: typeof shop;
  tracer: typeof tracer;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {
  tracer: {
    lib: {
      addLog: FunctionReference<
        "mutation",
        "internal",
        {
          log: {
            message: string;
            metadata?: Record<string, any>;
            severity: "info" | "warn" | "error";
            timestamp: number;
          };
          spanId: string;
        },
        string
      >;
      cleanupTrace: FunctionReference<
        "mutation",
        "internal",
        { traceId: string },
        null
      >;
      completeSpan: FunctionReference<
        "mutation",
        "internal",
        {
          duration: number;
          endTime: number;
          error?: string;
          result?: any;
          spanId: string;
          status: "success" | "error";
        },
        null
      >;
      createSpan: FunctionReference<
        "mutation",
        "internal",
        {
          span: {
            args?: any;
            functionName?: string;
            parentSpanId?: string;
            source: "frontend" | "backend";
            spanName: string;
            startTime: number;
            status: "pending" | "success" | "error";
          };
          traceId: string;
        },
        string
      >;
      createTrace: FunctionReference<
        "mutation",
        "internal",
        {
          metadata?: Record<string, any>;
          sampleRate: number;
          source: "frontend" | "backend";
          status: "pending" | "success" | "error";
        },
        string
      >;
      getTrace: FunctionReference<
        "query",
        "internal",
        { traceId: string },
        null | {
          _creationTime: number;
          _id: string;
          metadata?: Record<string, any>;
          preserve?: boolean;
          sampleRate: number;
          spans: Array<{
            _creationTime: number;
            _id: string;
            args?: any;
            children?: Array<any>;
            duration?: number;
            endTime?: number;
            error?: string;
            functionName?: string;
            logs?: Array<{
              _creationTime: number;
              _id: string;
              message: string;
              metadata?: Record<string, any>;
              severity: "info" | "warn" | "error";
              spanId: string;
              timestamp: number;
            }>;
            metadata?: Record<string, any>;
            parentSpanId?: string;
            result?: any;
            source: "frontend" | "backend";
            spanName: string;
            startTime: number;
            status: "pending" | "success" | "error";
            traceId: string;
          }>;
          status: "pending" | "success" | "error";
          updatedAt: number;
          userId?: string;
        }
      >;
      listTraces: FunctionReference<
        "query",
        "internal",
        {
          limit?: number;
          status?: "pending" | "success" | "error";
          userId?: string;
        },
        Array<{
          _creationTime: number;
          _id: string;
          metadata?: Record<string, any>;
          preserve?: boolean;
          sampleRate: number;
          status: "pending" | "success" | "error";
          updatedAt: number;
          userId?: string;
        }>
      >;
      updateSpanMetadata: FunctionReference<
        "mutation",
        "internal",
        { metadata: Record<string, any>; spanId: string },
        null
      >;
      updateTraceMetadata: FunctionReference<
        "mutation",
        "internal",
        { metadata: Record<string, any>; traceId: string },
        null
      >;
      updateTracePreserve: FunctionReference<
        "mutation",
        "internal",
        { preserve?: boolean; sampleRate?: number; traceId: string },
        null
      >;
      updateTraceStatus: FunctionReference<
        "mutation",
        "internal",
        { status: "pending" | "success" | "error"; traceId: string },
        null
      >;
      verifySpan: FunctionReference<
        "query",
        "internal",
        { spanId: string },
        boolean
      >;
      verifyTrace: FunctionReference<
        "query",
        "internal",
        { traceId: string },
        boolean
      >;
    };
  };
};
