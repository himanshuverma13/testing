import Wean from '../../model/farmData/farmDataWeanModel.js'

export const createWean = async (req, res) => {
  try {
    const user = await Wean.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getWean = async (req, res) => {
  try {
    const user = await Wean.find({parentid:req.params.id});
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateWean = async (req, res) => {
  try {
    const user = await Wean.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteWean = async (req, res) => {
  try {
    const user = await Wean.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.send({ message: "User deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {createWean,getWean,updateWean,deleteWean}