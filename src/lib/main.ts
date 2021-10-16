//rename file printful js or do in index
import { RequestInit } from 'node-fetch';

import { ErrorHandler } from '../types/functions';

import {
  getCatalogFunctions,
  getCountryFunctions,
  getFileFunctions,
  getOrderFunctions,
  getProductFunctions,
  getShippingRateFunctions,
  getStoreFunctions,
  getTaxFunctions,
  getWarehouseProductFunctions,
  getWarehouseShipmentFunctions,
  getWebhookFunctions,
} from './api';
import { getFetch } from './fetch';
import { getAPIFunctions } from './functions';

const DEFAULT_BASE_URL = 'https://api.printful.com';

const getDefaultInit = (b64ApiKey: string) => ({
  headers: {
    Authorization: `Basic ${b64ApiKey}`,
  },
});

type Options = {
  readonly baseUrl?: string;
  readonly apiKey: string;
  readonly fetchConfig?: RequestInit;
  readonly handleError?: ErrorHandler;
};

const b64 = (apiKey: string): string => Buffer.from(apiKey).toString('base64');

const printful = ({
  baseUrl = DEFAULT_BASE_URL,
  apiKey,
  fetchConfig = {},
}: // handleError = defaultHandleError,
Options) => {
  const requestInit = getDefaultInit(b64(apiKey));
  const fetch = getFetch(baseUrl, { ...requestInit, ...fetchConfig });
  const apiFunctions = getAPIFunctions(fetch);
  return {
    catalog: { ...getCatalogFunctions(apiFunctions) },
    products: { ...getProductFunctions(apiFunctions) },
    orders: { ...getOrderFunctions(apiFunctions) },
    files: { ...getFileFunctions(apiFunctions) },
    shipping: { ...getShippingRateFunctions(apiFunctions) },
    countries: { ...getCountryFunctions(apiFunctions) },
    taxes: { ...getTaxFunctions(apiFunctions) },
    webhooks: { ...getWebhookFunctions(apiFunctions) },
    store: { ...getStoreFunctions(apiFunctions) },
    warehouseProducts: { ...getWarehouseProductFunctions(apiFunctions) },
    warehouseShipments: { ...getWarehouseShipmentFunctions(apiFunctions) },
  };
};

export default printful;
