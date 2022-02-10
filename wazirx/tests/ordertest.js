const {wazirxGetOrderInfo, wazirxOrderLimitTest} = require('../api');

async function testGG() {
  const result = await wazirxGetOrderInfo('778559074');
  console.log(result);
  // const result = await wazirxOrderLimitTest('adainr', 2, 100, 'buy');
  // console.log(result);
}

testGG();
