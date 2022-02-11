[wazirx-api](README.md) / Exports

# wazirx-api

## Table of contents

### Functions

- [wazirxCancelAllOpenOrders](modules.md#wazirxcancelallopenorders)
- [wazirxCancelOrder](modules.md#wazirxcancelorder)
- [wazirxGetAccountInformation](modules.md#wazirxgetaccountinformation)
- [wazirxGetAllOdersFor](modules.md#wazirxgetallodersfor)
- [wazirxGetAllOpenOders](modules.md#wazirxgetallopenoders)
- [wazirxGetExchangeInfo](modules.md#wazirxgetexchangeinfo)
- [wazirxGetFundDetails](modules.md#wazirxgetfunddetails)
- [wazirxGetOldTradeList](modules.md#wazirxgetoldtradelist)
- [wazirxGetOrderBook](modules.md#wazirxgetorderbook)
- [wazirxGetRecentTradeList](modules.md#wazirxgetrecenttradelist)
- [wazirxGetSystemTime](modules.md#wazirxgetsystemtime)
- [wazirxInit](modules.md#wazirxinit)
- [wazirxPlaceNewOrder](modules.md#wazirxplaceneworder)
- [wazirxPlaceNewOrderTest](modules.md#wazirxplacenewordertest)
- [wazirxQueryOrder](modules.md#wazirxqueryorder)

## Functions

### wazirxCancelAllOpenOrders

▸ **wazirxCancelAllOpenOrders**(`symbol`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:138](https://github.com/superRaptor911/WazirxApiNodejs/blob/fccc258/wazirx/api.ts#L138)

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

[api.ts:125](https://github.com/superRaptor911/WazirxApiNodejs/blob/fccc258/wazirx/api.ts#L125)

___

### wazirxGetAccountInformation

▸ **wazirxGetAccountInformation**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:192](https://github.com/superRaptor911/WazirxApiNodejs/blob/fccc258/wazirx/api.ts#L192)

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

[api.ts:77](https://github.com/superRaptor911/WazirxApiNodejs/blob/fccc258/wazirx/api.ts#L77)

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

[api.ts:109](https://github.com/superRaptor911/WazirxApiNodejs/blob/fccc258/wazirx/api.ts#L109)

___

### wazirxGetExchangeInfo

▸ **wazirxGetExchangeInfo**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:23](https://github.com/superRaptor911/WazirxApiNodejs/blob/fccc258/wazirx/api.ts#L23)

___

### wazirxGetFundDetails

▸ **wazirxGetFundDetails**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:202](https://github.com/superRaptor911/WazirxApiNodejs/blob/fccc258/wazirx/api.ts#L202)

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

[api.ts:59](https://github.com/superRaptor911/WazirxApiNodejs/blob/fccc258/wazirx/api.ts#L59)

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

[api.ts:33](https://github.com/superRaptor911/WazirxApiNodejs/blob/fccc258/wazirx/api.ts#L33)

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

[api.ts:46](https://github.com/superRaptor911/WazirxApiNodejs/blob/fccc258/wazirx/api.ts#L46)

___

### wazirxGetSystemTime

▸ **wazirxGetSystemTime**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[api.ts:13](https://github.com/superRaptor911/WazirxApiNodejs/blob/fccc258/wazirx/api.ts#L13)

___

### wazirxInit

▸ **wazirxInit**(`secretKey`, `apiKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretKey` | `string` |
| `apiKey` | `string` |

#### Returns

`void`

#### Defined in

[api.ts:9](https://github.com/superRaptor911/WazirxApiNodejs/blob/fccc258/wazirx/api.ts#L9)

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

[api.ts:150](https://github.com/superRaptor911/WazirxApiNodejs/blob/fccc258/wazirx/api.ts#L150)

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

[api.ts:171](https://github.com/superRaptor911/WazirxApiNodejs/blob/fccc258/wazirx/api.ts#L171)

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

[api.ts:97](https://github.com/superRaptor911/WazirxApiNodejs/blob/fccc258/wazirx/api.ts#L97)
