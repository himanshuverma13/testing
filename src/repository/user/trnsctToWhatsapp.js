import axios from "axios";

const WATI_API_URL = "https://app-server.wati.io"; 
const WATI_API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YzNkNzU2OC1kM2ZkLTQwZTktYjE4NS1mMGMwODY0NDEzYzYiLCJ1bmlxdWVfbmFtZSI6ImNhZG9iNDU4MzVAYnJpbmtjLmNvbSIsIm5hbWVpZCI6ImNhZG9iNDU4MzVAYnJpbmtjLmNvbSIsImVtYWlsIjoiY2Fkb2I0NTgzNUBicmlua2MuY29tIiwiYXV0aF90aW1lIjoiMDgvMjEvMjAyNCAwOToxMzowOCIsImRiX25hbWUiOiJ3YXRpX2FwcF90cmlhbCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlRSSUFMIiwiZXhwIjoxNzI0ODg5NjAwLCJpc3MiOiJDbGFyZV9BSSIsImF1ZCI6IkNsYXJlX0FJIn0.Jg_RzzxHC6gKI55fT-u4j9q8d_7aKmeZcezaPGs7CZM"; // Replace with your actual API key

export const sendTransactionWhatsapp = async (data) => {
  console.log('data: ', data);
  try {
    const response = await axios.post(
      `${WATI_API_URL}/api/v1/sendTemplateMessage?whatsappNumber=919406890019`,
      {
        template_name: "shopify_default_cod_confirm_order_v5",
        broadcast_name: "shopify_default_cod_confirm_order_v5",
        parameters: [
          {
            name: "shopify_product_image",
            value: `${data?.image}`,
          },
          { name: "name", value: `${data?.name}` },
          { name: "total_price", value: `${data?.mobileNumber}` },
          { name: "shop_name", value: `${data?.address}` },
          { name: "cod_confirm_url", value: `${data?.amount}` },
          { name: "cod_cancel_url", value: `${data?.cod_payment}` },
          { name: "shop_name", value: `${data?.transactionID}` },
          { name: "cod_confirm_url_partial_variable", value: "DEMO-CART" },
        ],
      },
      {
        headers: {
          Authorization: `${WATI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    // res.status(200).json(response.data);
    console.log('response.data: ', response.data);
  } catch (error) {
    console.log('error: ', error);
    // res.status(500).json({ error: error.message });
  }
};
