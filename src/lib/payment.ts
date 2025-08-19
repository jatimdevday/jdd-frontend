import axios from "axios";
import CryptoJS from "crypto-js";

const url = "https://sandbox.ipaymu.com/api/v2/payment";

type PaymentBody = {
  product: string[];
  qty: string[];
  price: string[];
  amount: string;
  buyerName: string;
  buyerPhone?: string;
  buyerEmail: string;
  notifyUrl: string;
  paymentMethod: string;
};

export async function createPayment(body: PaymentBody) {
  const apikey = "SANDBOX37470D93-E02C-4927-A155-F4CBB4877873";
  const va = "0000002145109725";

  const bodyEncrypt = CryptoJS.SHA256(JSON.stringify(body)).toString();
  const stringtosign = `POST:${va}:${bodyEncrypt}:${apikey}`;
  const signature = CryptoJS.enc.Hex.stringify(
    CryptoJS.HmacSHA256(stringtosign, apikey)
  );

  const timestamp = new Date()
    .toISOString()
    .replace(/[-:T.]/g, "")
    .slice(0, 14);

  const response = await axios.post(url, body, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      va: va,
      signature: signature,
      timestamp: timestamp,
    },
  });
  return response.data["Data"] as { Url: string; SessionID: string };
}
