import adminProduct from "../model/adminModel/adminProduct.js";

export const checkStock = async (data) => {
  try {
    for (const element of data) {
      let checkStock = await adminProduct.find({ _id: element?.id });
      if (!checkStock) {
        return {
          status: 404,
          message: "Product not found",
        };
      }
      let ChangeQuntity = checkStock[0]?.stock - element?.amount;
      if (ChangeQuntity < 0) {
        return {
          status: 404,
          message: "Product out of stock",
          name: checkStock[0]?.name,
          weight: checkStock[0]?.Weight,
        };
      }
    }
    return {
      success: true,
      status: 207,
    };
  } catch (error) {
    return error.message;
  }
};
export default checkStock;
