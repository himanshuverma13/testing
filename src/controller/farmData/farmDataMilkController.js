import Milk from '../../model/farmData/farmDataMilkModel.js'

export const createMilk = async (req, res) => {
  try {
    const user = await Milk.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getMilk = async (req, res) => {
  try {
    const user = await Milk.find({parentid: req.params.id});
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateMilk = async (req, res) => {
  try {
    const user = await Milk.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteMilk = async (req, res) => {
  try {
    const user = await Milk.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.send({ message: "User deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {createMilk,getMilk,updateMilk,deleteMilk}