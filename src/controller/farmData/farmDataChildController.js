import Child from '../../model/farmData/farmDataChildModel.js'

export const createChild = async (req, res) => {
  try {
    const user = await Child.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getChild = async (req, res) => {
  try {
    const user = await Child.find({parentid:req.params.id});
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateChild = async (req, res) => {
  try {
    const user = await Child.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteChild = async (req, res) => {
  try {
    const user = await Child.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.send({ message: "User deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {createChild,getChild,updateChild,deleteChild}