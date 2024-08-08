import Review from "../../model/user/productReviewModel.js";

export const createProductReview = async (req, res) => {
  try {
    await Review.create(req.body);
    res.status(201).send("form submitted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getProductReview = async (req, res) => {
  try {
    const user = await Review.find({productid: req.params.id});
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
