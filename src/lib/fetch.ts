import _fetch, { RequestInfo, RequestInit, Response } from 'node-fetch';

export type Fetch = (url: RequestInfo, init?: RequestInit) => Promise<Response>;

export const getFetch =
  (baseUrl: string, defaultInit: RequestInit): Fetch =>
  (url, init) =>
    _fetch(`${baseUrl}${url}`, { ...defaultInit, ...init });
