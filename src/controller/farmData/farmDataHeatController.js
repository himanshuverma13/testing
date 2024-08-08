import Heat from '../../model/farmData/farmDataHeatModel.js'

export const createHeat = async (req, res) => {
  try {
    const user = await Heat.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getHeat = async (req, res) => {
  try {
    const user = await Heat.find({parentid:req.params.id});
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateHeat = async (req, res) => {
  try {
    const user = await Heat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteHeat = async (req, res) => {
  try {
    const user = await Heat.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.send({ message: "User deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {createHeat,getHeat,updateHeat,deleteHeat}