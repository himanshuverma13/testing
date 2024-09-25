import adminProduct from "../model/adminModel/adminProduct.js";
import addToCart from "../model/user/addToCartModel.js";

const UdateAddToCartStock = async (data) => {
  try {
    // Fetch all products to get the current stock
    let getCurrentStock = await adminProduct.find({});

    // Loop through each item in data (cart items)
    for (const item2 of data) {
      // Find the matching product from the stock list
      const matchingItem = getCurrentStock.find(
        (item1) => String(item1._id) === String(item2.id)
      );

      if (matchingItem) {
        item2.stock = matchingItem.stock;
        if (item2.amount > matchingItem.stock) {
          item2.amount = matchingItem.stock;
        }

        // Update the addToCart collection with the updated stock
        await addToCart.findOneAndUpdate(
          { id: item2.id,uid:item2?.uid }, // Match the cart item by id
          {
            $set: {
              stock: item2.stock,
              amount: item2.amount,
            },
          },
          { new: true } // Return the updated document
        );
      }
    }

    return data; // Return the updated cart data
  } catch (e) {
    console.log("Error: ", e);
  }
};

export default UdateAddToCartStock;
