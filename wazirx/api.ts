import {
  wazirxGetRequest,
  wazirxDeleteRequest,
  wazirxPostRequest,
  initWazirx,
} from './request';

/**
 * Initiate Wazirx Api with your keys
 */
export function wazirxInit(secretKey: string, apiKey: string) {
  initWazirx(secretKey, apiKey);
}

/**
 * Get System time
 */
export async function wazirxGetSystemTime() {
  try {
    const response = await wazirxGetRequest('/sapi/v1/time');
    return response;
  } catch (e) {
    /* handle error */
    console.error('api::wazirxGetOrderInfo', e);
  }
}

export async function wazirxGetExchangeInfo() {
  try {
    const response = await wazirxGetRequest('/sapi/v1/exchangeInfo');
    return response;
  } catch (e) {
    /* handle error */
    console.error('api::wazirxGetOrderInfo', e);
  }
}

export async function wazirxGetOrderBook(symbol: string, limit = 20) {
  try {
    const response = await wazirxGetRequest('/sapi/v1/depth', {
      symbol: symbol,
      limit: limit,
    });
    return response;
  } catch (e) {
    /* handle error */
    console.error('api::wazirxGetOrderInfo', e);
  }
}

export async function wazirxGetRecentTradeList(symbol: string, limit = 500) {
  try {
    const response = await wazirxGetRequest('/sapi/v1/trades', {
      symbol: symbol,
      limit: limit,
    });
    return response;
  } catch (e) {
    /* handle error */
    console.error('api::wazirxGetOrderInfo', e);
  }
}

export async function wazirxGetOldTradeList(
  symbol: string,
  limit = 500,
  fromId: number | undefined = undefined,
) {
  try {
    const response = await wazirxGetRequest('/sapi/v1/historicalTrades', {
      symbol: symbol,
      limit: limit,
      fromId: fromId,
    });
    return response;
  } catch (e) {
    /* handle error */
    console.error('api::wazirxGetOrderInfo', e);
  }
}

export async function wazirxGetAllOdersFor(
  symbol: string,
  limit = 500,
  startTime?: number,
  endTime?: number,
) {
  try {
    const response = await wazirxGetRequest('/sapi/v1/allOrders', {
      symbol: symbol,
      limit: limit,
      startTime: startTime,
      endTime: endTime,
    });
    return response;
  } catch (e) {
    /* handle error */
    console.error('api::wazirxGetAllOdersFor', e);
  }
}

export async function wazirxQueryOrder(orderId: string) {
  try {
    const response = await wazirxGetRequest('/sapi/v1/order', {
      orderId: orderId,
    });
    return response;
  } catch (e) {
    /* handle error */
    console.error('api::wazirxGetOrderInfo', e);
  }
}

export async function wazirxGetAllOpenOders(
  symbol?: string,
  orderId?: string | number,
) {
  try {
    const response = await wazirxGetRequest('/sapi/v1/openOrders', {
      symbol: symbol,
      orderId: orderId,
    });
    return response;
  } catch (e) {
    /* handle error */
    console.error('api::wazirxGetAllOdersFor', e);
  }
}

export async function wazirxCancelOrder(symbol: string, orderId: string) {
  try {
    const response = await wazirxDeleteRequest('/sapi/v1/order', {
      symbol: symbol,
      orderId: orderId,
    });
    return response;
  } catch (e) {
    /* handle error */
    console.error('api::wazirxCancelOrder', e);
  }
}

export async function wazirxCancelAllOpenOrders(symbol: string) {
  try {
    const response = await wazirxDeleteRequest('/sapi/v1/openOrders', {
      symbol: symbol,
    });
    return response;
  } catch (e) {
    /* handle error */
    console.error('api::wazirxCancelOrder', e);
  }
}

export async function wazirxPlaceNewOrder(
  symbol: string,
  quantity: number,
  price: number,
  side: string,
) {
  try {
    const response = await wazirxPostRequest('/sapi/v1/order', {
      symbol: symbol,
      side: side,
      type: 'limit',
      quantity: quantity,
      price: price,
    });
    return response;
  } catch (e) {
    /* handle error */
    console.error('api::wazirxOrderLimit', e);
  }
}

export async function wazirxPlaceNewOrderTest(
  symbol: string,
  quantity: number,
  price: number,
  side: string,
) {
  try {
    const response = await wazirxPostRequest('/sapi/v1/order/test', {
      symbol: symbol,
      side: side,
      type: 'limit',
      quantity: quantity,
      price: price,
    });
    return response;
  } catch (e) {
    /* handle error */
    console.error('api::wazirxOrderLimitTest', e);
  }
}

export async function wazirxGetAccountInformation() {
  try {
    const response = await wazirxGetRequest('/sapi/v1/account');
    return response;
  } catch (e) {
    /* handle error */
    console.error('api::wazirxGetAllOdersFor', e);
  }
}

export async function wazirxGetFundDetails() {
  try {
    const response = await wazirxGetRequest('/sapi/v1/funds');
    return response;
  } catch (e) {
    /* handle error */
    console.error('api::wazirxGetAllOdersFor', e);
  }
}
