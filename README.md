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
    // sell 1 ada at 150 rupeees
    const receipt = await wazirxApi.wazirxPlaceNewOrder(
      "adainr",
      1,
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

# wazirx-api

## Table of contents

### Functions

- [wazirxInit](#wazirxinit)
- [wazirxGetSystemTime](#wazirxgetsystemtime)
- [wazirxGetExchangeInfo](#wazirxgetexchangeinfo)
- [wazirxGetOrderBook](#wazirxgetorderbook)
- [wazirxGetRecentTradeList](#wazirxgetrecenttradelist)
- [wazirxGetOldTradeList](#wazirxgetoldtradelist)
- [wazirxGetAllOdersFor](#wazirxgetallodersfor)
- [wazirxQueryOrder](#wazirxqueryorder)
- [wazirxGetAllOpenOders](#wazirxgetallopenoders)
- [wazirxCancelOrder](#wazirxcancelorder)
- [wazirxCancelAllOpenOrders](#wazirxcancelallopenorders)
- [wazirxPlaceNewOrder](#wazirxplaceneworder)
- [wazirxPlaceNewOrderTest](#wazirxplacenewordertest)
- [wazirxGetAccountInformation](#wazirxgetaccountinformation)
- [wazirxGetFundDetails](#wazirxgetfunddetails)

## Functions

### wazirxInit

▸ **wazirxInit**(`secretKey`, `apiKey`): `void`

Initiate Wazirx Api with your keys

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretKey` | `string` |
| `apiKey` | `string` |

#### Returns

`void`

#### Defined in

[api.ts:11](https://github.com/superRaptor911/WazirxApiNodejs/blob/db36ed0/wazirx/api.ts#L11)

___

### wazirxGetSystemTime

▸ **wazirxGetSystemTime**(): `Promise`<`any`\>

Get System time

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:18](https://github.com/superRaptor911/WazirxApiNodejs/blob/db36ed0/wazirx/api.ts#L18)

___

### wazirxGetExchangeInfo

▸ **wazirxGetExchangeInfo**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:28](https://github.com/superRaptor911/WazirxApiNodejs/blob/db36ed0/wazirx/api.ts#L28)

___

### wazirxGetOrderBook

▸ **wazirxGetOrderBook**(`symbol`, `limit?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `symbol` | `string` | `undefined` |
| `limit` | `number` | `20` |

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:38](https://github.com/superRaptor911/WazirxApiNodejs/blob/db36ed0/wazirx/api.ts#L38)

___

### wazirxGetRecentTradeList

▸ **wazirxGetRecentTradeList**(`symbol`, `limit?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `symbol` | `string` | `undefined` |
| `limit` | `number` | `500` |

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:51](https://github.com/superRaptor911/WazirxApiNodejs/blob/db36ed0/wazirx/api.ts#L51)

___

### wazirxGetOldTradeList

▸ **wazirxGetOldTradeList**(`symbol`, `limit?`, `fromId?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `symbol` | `string` | `undefined` |
| `limit` | `number` | `500` |
| `fromId` | `undefined` \| `number` | `undefined` |

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:64](https://github.com/superRaptor911/WazirxApiNodejs/blob/db36ed0/wazirx/api.ts#L64)

___

### wazirxGetAllOdersFor

▸ **wazirxGetAllOdersFor**(`symbol`, `limit?`, `startTime?`, `endTime?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `symbol` | `string` | `undefined` |
| `limit` | `number` | `500` |
| `startTime?` | `number` | `undefined` |
| `endTime?` | `number` | `undefined` |

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:82](https://github.com/superRaptor911/WazirxApiNodejs/blob/db36ed0/wazirx/api.ts#L82)

___

### wazirxQueryOrder

▸ **wazirxQueryOrder**(`orderId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orderId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:102](https://github.com/superRaptor911/WazirxApiNodejs/blob/db36ed0/wazirx/api.ts#L102)

___

### wazirxGetAllOpenOders

▸ **wazirxGetAllOpenOders**(`symbol?`, `orderId?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol?` | `string` |
| `orderId?` | `string` \| `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:114](https://github.com/superRaptor911/WazirxApiNodejs/blob/db36ed0/wazirx/api.ts#L114)

___

### wazirxCancelOrder

▸ **wazirxCancelOrder**(`symbol`, `orderId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol` | `string` |
| `orderId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:130](https://github.com/superRaptor911/WazirxApiNodejs/blob/db36ed0/wazirx/api.ts#L130)

___

### wazirxCancelAllOpenOrders

▸ **wazirxCancelAllOpenOrders**(`symbol`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:143](https://github.com/superRaptor911/WazirxApiNodejs/blob/db36ed0/wazirx/api.ts#L143)

___

### wazirxPlaceNewOrder

▸ **wazirxPlaceNewOrder**(`symbol`, `quantity`, `price`, `side`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol` | `string` |
| `quantity` | `number` |
| `price` | `number` |
| `side` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:155](https://github.com/superRaptor911/WazirxApiNodejs/blob/db36ed0/wazirx/api.ts#L155)

___

### wazirxPlaceNewOrderTest

▸ **wazirxPlaceNewOrderTest**(`symbol`, `quantity`, `price`, `side`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol` | `string` |
| `quantity` | `number` |
| `price` | `number` |
| `side` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:176](https://github.com/superRaptor911/WazirxApiNodejs/blob/db36ed0/wazirx/api.ts#L176)

___

### wazirxGetAccountInformation

▸ **wazirxGetAccountInformation**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:197](https://github.com/superRaptor911/WazirxApiNodejs/blob/db36ed0/wazirx/api.ts#L197)

___

### wazirxGetFundDetails

▸ **wazirxGetFundDetails**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:207](https://github.com/superRaptor911/WazirxApiNodejs/blob/db36ed0/wazirx/api.ts#L207)

