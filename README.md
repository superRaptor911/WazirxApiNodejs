# WazirxApiNodejs

Wazirx api for NodeJs

# Basic Usage

```js
const wazirxApi = require("wazirx-api");

wazirxApi.wazirxInit(YourWazirxSecretKey,YourWazirxApiKey);
 
async function main() {
  try {
    const myFunds = await wazirxApi.wazirxGetFundDetails();
    console.log(myFunds);
    // sell 2 ada for 150 rupeees
    const receipt = await wazirxApi.wazirxPlaceNewOrder(
      "adainr",
      2,
      150,
      "sell"
    );
    console.log(receipt);

    const status = await wazirxApi.wazirxQueryOrder(receipt.orderId);
    console.log(status);
  } catch (e) {
    /* handle error */
    console.error("Error", e);
  }
}

main();

 
```
