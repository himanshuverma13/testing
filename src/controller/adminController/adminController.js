import adminProduct from "../../model/adminModel/adminProduct.js";

export const createProduct = async (req, res, next) => {
  try {
    const product = await adminProduct.create(req?.body);
    if (!product) res.status(404).send("Product not created!");
    res.json({
      success: true,
      message: "Product created successfully",
      status: 200,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getAllProduct = async (req, res, next) => {
  try {
    const products = await adminProduct.find({});

    if (!products) res.status(404).send("Products not found!");

    res.json({
      success: true,
      status: 200,
      products,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await adminProduct.findById(req?.params?.id);
    if (!product) res.status(404).send("Product not found!");

    res.json({
      success: true,
      status: 200,
      product,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const product = await adminProduct.findByIdAndUpdate(
      req?.params?.id,
      req?.body,
      {
        new: true,
      }
    );
    if (!product) res.status(404).send("Product not found!");

    res.json({
      success: true,
      status: 200,
      message: "Product update successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateProductStock = async (data) => {
  try {
    for (const element of data) {
      let stockQunt = await adminProduct.find({ _id: element?.id });
      let ChangeQuntity = stockQunt[0]?.stock - element?.amount;
      const products = await adminProduct.findOneAndUpdate(
        { _id: element?.id },
        { stock: ChangeQuntity },
        {
          new: true,
        }
      );
    }
      return {
        success: true,
        status: 207,
        message: "Product quantity update successfully",
      };
  } catch (error) {
    return error.message;
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await adminProduct.findByIdAndDelete(req.params.id);

    if (!product) return res.status(404).send("product not found");

    res.json({
      success: true,
      status: 200,
      message: "Product delete successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
