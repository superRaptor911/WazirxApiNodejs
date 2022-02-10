import crypto from "crypto";
import fetch from "cross-fetch";

let secretKey = null;
let apiKey = null;
const server = "https://api.wazirx.com";

function getSignature(key: string, params: any) {
  const qs = new URLSearchParams(params);
  const string = qs.toString();
  const hmac = crypto.createHmac("sha256", key);
  const data = hmac.update(string);
  const genHmac = data.digest("hex");
  return genHmac;
}

export function initWazirx(wazirxSecretKey: string, wazirxApiKey: string) {
  secretKey = wazirxSecretKey;
  apiKey = wazirxApiKey;
}

export async function wazirxPostRequest(endpoint: string, data: any) {
  if (!secretKey || !apiKey) {
    throw "API Keys not defined";
  }

  data.timestamp = new Date().getTime();
  data.recvWindow = data.recvWindow ? data.recvWindow : 20000;
  data.signature = getSignature(secretKey, data);

  try {
    const response = await fetch(server + endpoint, {
      method: "POST",
      headers: {
        "X-API-KEY": apiKey,
      },

      body: new URLSearchParams(data),
    });

    const dat = await response.json();
    return dat;
  } catch (e) {
    /* handle error */
    console.error("Utility::wazirxPostRequest ", e);
    throw e;
  }
}

export async function wazirxDeleteRequest(endpoint: string, data: any) {
  if (!secretKey || !apiKey) {
    throw "API Keys not defined";
  }

  data.timestamp = new Date().getTime();
  data.recvWindow = data.recvWindow ? data.recvWindow : 20000;
  data.signature = getSignature(secretKey, data);

  try {
    const response = await fetch(server + endpoint, {
      method: "DELETE",
      headers: {
        "X-API-KEY": apiKey,
      },

      body: new URLSearchParams(data),
    });

    const dat = await response.json();
    return dat;
  } catch (e) {
    /* handle error */
    console.error("Utility::wazirxDeleteRequest ", e);
    throw e;
  }
}

export async function wazirxGetRequest(endpoint: string, data: any) {
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
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
      },
    });

    const data = await response.json();
    return data;
  } catch (e) {
    /* handle error */
    console.error("Utility::wazirxGetRequest ", e);
    throw e;
  }
}
