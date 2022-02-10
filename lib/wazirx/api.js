"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wazirxApi = void 0;
const request_1 = require("./request");
var wazirxApi;
(function (wazirxApi) {
    function wazirxInit(secretKey, apiKey) {
        (0, request_1.initWazirx)(secretKey, apiKey);
    }
    wazirxApi.wazirxInit = wazirxInit;
    function wazirxGetOrderInfo(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, request_1.wazirxGetRequest)('/sapi/v1/order', {
                    orderId: orderId,
                });
                return response;
            }
            catch (e) {
                /* handle error */
                console.error('api::wazirxGetOrderInfo', e);
            }
        });
    }
    wazirxApi.wazirxGetOrderInfo = wazirxGetOrderInfo;
    function wazirxGetAllOdersFor(symbol) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, request_1.wazirxGetRequest)('/sapi/v1/allOrders', {
                    symbol: symbol,
                });
                return response;
            }
            catch (e) {
                /* handle error */
                console.error('api::wazirxGetAllOdersFor', e);
            }
        });
    }
    wazirxApi.wazirxGetAllOdersFor = wazirxGetAllOdersFor;
    function wazirxCancelOrder(symbol, orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, request_1.wazirxDeleteRequest)('/sapi/v1/order', {
                    symbol: symbol,
                    orderId: orderId,
                });
                return response;
            }
            catch (e) {
                /* handle error */
                console.error('api::wazirxCancelOrder', e);
            }
        });
    }
    wazirxApi.wazirxCancelOrder = wazirxCancelOrder;
    function wazirxOrderLimit(symbol, quantity, price, side) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, request_1.wazirxPostRequest)('/sapi/v1/order', {
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
        });
    }
    wazirxApi.wazirxOrderLimit = wazirxOrderLimit;
    function wazirxOrderLimitTest(symbol, quantity, price, side) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, request_1.wazirxPostRequest)('/sapi/v1/order/test', {
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
        });
    }
    wazirxApi.wazirxOrderLimitTest = wazirxOrderLimitTest;
})(wazirxApi = exports.wazirxApi || (exports.wazirxApi = {}));
//# sourceMappingURL=api.js.map