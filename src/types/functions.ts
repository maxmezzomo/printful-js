import { Response } from 'node-fetch';

import { getAPIFunctions } from '../lib/functions';

export type Paging = {
  readonly total: number;
  readonly offset: number;
  readonly limit: number;
};

type BaseParameters = Record<string, unknown> | ReadonlyArray<unknown>;

export type URLParameters = BaseParameters;
export type POSTParameters = BaseParameters;
export type GETParameters = Record<string, string | number | boolean>;
export type PUTParameters = BaseParameters;
export type DELETEParameters = BaseParameters;

export type GetEndpoint<P extends URLParameters> = (parameters: P) => string;
export type ResolveParameters<U, P> = (parameters: U & P) => readonly [U, P];

export type DefaultErrorResponse = {
  readonly code: number;
  readonly result: string;
  readonly error: Record<string, string>;
};

export type SuccessResponse<R> = {
  readonly code: number;
  readonly result: R;
};

export type APIListResponse<R> =
  | (SuccessResponse<R> & { readonly paging: Paging })
  | DefaultErrorResponse;

// export type APIResponse<R> =
//   | (SuccessResponse<R> & { readonly paging: Paging })
//   | ErrorResponse;
// & {ok:()=> guard}

export type APIResponse<R> = SuccessResponse<R> | DefaultErrorResponse;

export type IDParameter<T = number> = { readonly id: T };
export type EmptyParameters = Record<string, unknown>;

export type Result = Record<string, unknown> | ReadonlyArray<unknown>;

export type APIFunctions = ReturnType<typeof getAPIFunctions>;

export type ErrorHandler = (
  e: unknown
) =>
  | Record<string, unknown>
  | ReadonlyArray<unknown>
  | number
  | string
  | boolean
  | null
  | undefined;

//resolve custom user response to handler
export type ResponseHandler = <R, E>(
  fetch: () => Promise<Response>
) => Promise<R | E>;
