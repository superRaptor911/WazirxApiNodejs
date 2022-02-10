"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wazirxOrderLimitTest = exports.wazirxOrderLimit = exports.wazirxCancelOrder = exports.wazirxGetAllOdersFor = exports.wazirxGetOrderInfo = void 0;
const request_1 = require("./request");
async function wazirxGetOrderInfo(orderId) {
    try {
        const response = await (0, request_1.wazirxGetRequest)('/sapi/v1/order', {
            orderId: orderId,
        });
        return response;
    }
    catch (e) {
        /* handle error */
        console.error('api::wazirxGetOrderInfo', e);
    }
}
exports.wazirxGetOrderInfo = wazirxGetOrderInfo;
async function wazirxGetAllOdersFor(symbol) {
    try {
        const response = await (0, request_1.wazirxGetRequest)('/sapi/v1/allOrders', {
            symbol: symbol,
        });
        return response;
    }
    catch (e) {
        /* handle error */
        console.error('api::wazirxGetAllOdersFor', e);
    }
}
exports.wazirxGetAllOdersFor = wazirxGetAllOdersFor;
async function wazirxCancelOrder(symbol, orderId) {
    try {
        const response = await (0, request_1.wazirxDeleteRequest)('/sapi/v1/order', {
            symbol: symbol,
            orderId: orderId,
        });
        return response;
    }
    catch (e) {
        /* handle error */
        console.error('api::wazirxCancelOrder', e);
    }
}
exports.wazirxCancelOrder = wazirxCancelOrder;
async function wazirxOrderLimit(symbol, quantity, price, side) {
    try {
        const response = await (0, request_1.wazirxPostRequest)('/sapi/v1/order', {
            symbol: symbol,
            side: side,
            type: 'limit',
            quantity: quantity,
            price: price,
        });
        return response;
    }
    catch (e) {
        /* handle error */
        console.error('api::wazirxOrderLimit', e);
    }
}
exports.wazirxOrderLimit = wazirxOrderLimit;
async function wazirxOrderLimitTest(symbol, quantity, price, side) {
    try {
        const response = await (0, request_1.wazirxPostRequest)('/sapi/v1/order/test', {
            symbol: symbol,
            side: side,
            type: 'limit',
            quantity: quantity,
            price: price,
        });
        return response;
    }
    catch (e) {
        /* handle error */
        console.error('api::wazirxOrderLimitTest', e);
    }
}
exports.wazirxOrderLimitTest = wazirxOrderLimitTest;
//# sourceMappingURL=api.js.map