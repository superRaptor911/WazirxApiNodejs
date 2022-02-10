"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wazirxGetRequest = exports.wazirxDeleteRequest = exports.wazirxPostRequest = exports.initWazirx = void 0;
const crypto_1 = __importDefault(require("crypto"));
const cross_fetch_1 = __importDefault(require("cross-fetch"));
let secretKey = null;
let apiKey = null;
const server = "https://api.wazirx.com";
function getSignature(key, params) {
    const qs = new URLSearchParams(params);
    const string = qs.toString();
    const hmac = crypto_1.default.createHmac("sha256", key);
    const data = hmac.update(string);
    const genHmac = data.digest("hex");
    return genHmac;
}
function initWazirx(wazirxSecretKey, wazirxApiKey) {
    secretKey = wazirxSecretKey;
    apiKey = wazirxApiKey;
}
exports.initWazirx = initWazirx;
async function wazirxPostRequest(endpoint, data) {
    if (!secretKey || !apiKey) {
        throw "API Keys not defined";
    }
    data.timestamp = new Date().getTime();
    data.recvWindow = data.recvWindow ? data.recvWindow : 20000;
    data.signature = getSignature(secretKey, data);
    try {
        const response = await (0, cross_fetch_1.default)(server + endpoint, {
            method: "POST",
            headers: {
                "X-API-KEY": apiKey,
            },
            body: new URLSearchParams(data),
        });
        const dat = await response.json();
        return dat;
    }
    catch (e) {
        /* handle error */
        console.error("Utility::wazirxPostRequest ", e);
        throw e;
    }
}
exports.wazirxPostRequest = wazirxPostRequest;
async function wazirxDeleteRequest(endpoint, data) {
    if (!secretKey || !apiKey) {
        throw "API Keys not defined";
    }
    data.timestamp = new Date().getTime();
    data.recvWindow = data.recvWindow ? data.recvWindow : 20000;
    data.signature = getSignature(secretKey, data);
    try {
        const response = await (0, cross_fetch_1.default)(server + endpoint, {
            method: "DELETE",
            headers: {
                "X-API-KEY": apiKey,
            },
            body: new URLSearchParams(data),
        });
        const dat = await response.json();
        return dat;
    }
    catch (e) {
        /* handle error */
        console.error("Utility::wazirxDeleteRequest ", e);
        throw e;
    }
}
exports.wazirxDeleteRequest = wazirxDeleteRequest;
async function wazirxGetRequest(endpoint, data) {
    if (!secretKey || !apiKey) {
        throw "API Keys not defined";
    }
    data.timestamp = new Date().getTime();
    data.recvWindow = data.recvWindow ? data.recvWindow : 20000;
    data.signature = getSignature(secretKey, data);
    const qs = new URLSearchParams(data);
    const string = qs.toString();
    const url = server + endpoint + "?" + string;
    try {
        const response = await (0, cross_fetch_1.default)(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": apiKey,
            },
        });
        const data = await response.json();
        return data;
    }
    catch (e) {
        /* handle error */
        console.error("Utility::wazirxGetRequest ", e);
        throw e;
    }
}
exports.wazirxGetRequest = wazirxGetRequest;
//# sourceMappingURL=request.js.map