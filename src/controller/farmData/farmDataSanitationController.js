import Sanitation from '../../model/farmData/farmDataSanitationModel.js'

export const createSanitation = async (req, res) => {
  try {
    const user = await Sanitation.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getSanitation = async (req, res) => {
  try {
    const user = await Sanitation.find({parentid:req.params.id});
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateSanitation = async (req, res) => {
  try {
    const user = await Sanitation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteSanitation = async (req, res) => {
  try {
    const user = await Sanitation.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.send({ message: "User deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {createSanitation,getSanitation,updateSanitation,deleteSanitation}