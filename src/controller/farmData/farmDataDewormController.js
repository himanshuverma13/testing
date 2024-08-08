import Deworm from '../../model/farmData/farmDataDewormModel.js'

export const createDeworm = async (req, res) => {
  try {
    const user = await Deworm.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getDeworm = async (req, res) => {
  try {
    const user = await Deworm.find({parentid:req.params.id});
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateDeworm = async (req, res) => {
  try {
    const user = await Deworm.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteDeworm = async (req, res) => {
  try {
    const user = await Deworm.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.send({ message: "User deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {createDeworm,getDeworm,updateDeworm,deleteDeworm}