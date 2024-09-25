import Transaction from "../../model/user/transactionModel.js";
import checkStock from "../../repository/checkStock.js";
import { sendTransactionWhatsapp } from "../../repository/user/trnsctToWhatsapp.js";
import { updateProductStock } from "../adminController/adminController.js";
import { deleteAfterTransaction } from "./addToCartController.js";

export const createTransaction = async (req, res) => {
  try {
    let Stockcheck = await checkStock(req?.body?.cart);
    if (Stockcheck.status !== 207) {
      return res.status(404).send(Stockcheck);
    }
    let updateQuantity = await updateProductStock(req?.body?.cart);
    if (updateQuantity.status !== 207) {
      return res
        .status(404)
        .send(updateQuantity);
    }
    const user = await Transaction.create(req?.body);
    res.status(201).send("Transaction submitted successfully");
    const result = sendTransactionWhatsapp(req?.body);
    deleteAfterTransaction(req?.body.uid);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getTransaction = async (req, res) => {
  try {
    const user = await Transaction.find();
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
