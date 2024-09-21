import AddToCart from "../../model/user/addToCartModel.js";

export const createAddToCart = async (req, res) => {
  try {
    let item = await AddToCart.findOne({id:req?.body?.id,uid:req?.body?.uid});
    if (!item) {
      await AddToCart.create(req.body);
      res.status(201).send("Cart item added successfully");
    } else {
      item.amount = req.body.amount;
      await item.save();
      res.status(200).send("Cart item updated successfully");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};


export const getCartData = async (req,res) => {
  try {
    const user = await AddToCart.find({uid:req?.params?.id});
    console.log('user: ', user);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteAddToCart = async (req, res) => {
    try {
      let item = await AddToCart.findOne({uid:req.query.uid});
      if(item){
         await AddToCart.deleteOne({id:req.params.id});
        res.status(200).send("success");
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
}
export const deleteAfterTransaction = async (data) => {
  try {
  const dataRemove =  await AddToCart.deleteMany({uid:data});
  } catch (error) {
    res.status(400).send(error.message);
  }
}