[wazirx-api](README.md) / Exports

# wazirx-api

## Table of contents

### Functions

- [wazirxInit](modules.md#wazirxinit)
- [wazirxGetSystemTime](modules.md#wazirxgetsystemtime)
- [wazirxGetExchangeInfo](modules.md#wazirxgetexchangeinfo)
- [wazirxGetOrderBook](modules.md#wazirxgetorderbook)
- [wazirxGetRecentTradeList](modules.md#wazirxgetrecenttradelist)
- [wazirxGetOldTradeList](modules.md#wazirxgetoldtradelist)
- [wazirxGetAllOdersFor](modules.md#wazirxgetallodersfor)
- [wazirxQueryOrder](modules.md#wazirxqueryorder)
- [wazirxGetAllOpenOders](modules.md#wazirxgetallopenoders)
- [wazirxCancelOrder](modules.md#wazirxcancelorder)
- [wazirxCancelAllOpenOrders](modules.md#wazirxcancelallopenorders)
- [wazirxPlaceNewOrder](modules.md#wazirxplaceneworder)
- [wazirxPlaceNewOrderTest](modules.md#wazirxplacenewordertest)
- [wazirxGetAccountInformation](modules.md#wazirxgetaccountinformation)
- [wazirxGetFundDetails](modules.md#wazirxgetfunddetails)

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
