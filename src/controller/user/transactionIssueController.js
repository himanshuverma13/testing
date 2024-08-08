import TransactionIssue from "../../model/user/transactionIssueModel.js"

export const createTransactionIssue = async (req, res) => {
  try {
   await TransactionIssue.create(req.body);
  //  send to whatsapp
    res.status(201).send("form submitted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
