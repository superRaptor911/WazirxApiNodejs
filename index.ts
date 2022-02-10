import { wazirxGetOrderInfo } from "./wazirx/api";
import { initWazirx } from "./wazirx/request";

initWazirx("", "");
wazirxGetOrderInfo("123456");
console.log("hello");
