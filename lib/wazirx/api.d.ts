export declare namespace wazirxApi {
    function wazirxInit(secretKey: string, apiKey: string): void;
    function wazirxGetOrderInfo(orderId: string): Promise<any>;
    function wazirxGetAllOdersFor(symbol: string): Promise<any>;
    function wazirxCancelOrder(symbol: string, orderId: string): Promise<any>;
    function wazirxOrderLimit(symbol: string, quantity: number, price: number, side: string): Promise<any>;
    function wazirxOrderLimitTest(symbol: string, quantity: number, price: number, side: string): Promise<any>;
}
