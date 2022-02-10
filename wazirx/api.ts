import {
  wazirxGetRequest,
  wazirxDeleteRequest,
  wazirxPostRequest,
} from './request';

export async function wazirxGetOrderInfo(orderId: string) {
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

export async function wazirxGetAllOdersFor(symbol: string) {
  try {
    const response = await wazirxGetRequest('/sapi/v1/allOrders', {
      symbol: symbol,
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

export async function wazirxOrderLimit(
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

export async function wazirxOrderLimitTest(
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
