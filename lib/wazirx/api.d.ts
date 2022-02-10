export declare function wazirxGetOrderInfo(orderId: string): Promise<any>;
export declare function wazirxGetAllOdersFor(symbol: string): Promise<any>;
export declare function wazirxCancelOrder(symbol: string, orderId: string): Promise<any>;
export declare function wazirxOrderLimit(symbol: string, quantity: number, price: number, side: string): Promise<any>;
export declare function wazirxOrderLimitTest(symbol: string, quantity: number, price: number, side: string): Promise<any>;
