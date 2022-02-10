"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./wazirx/api");
const request_1 = require("./wazirx/request");
(0, request_1.initWazirx)("", "");
(0, api_1.wazirxGetOrderInfo)("123456");
console.log("hello");
//# sourceMappingURL=index.js.map