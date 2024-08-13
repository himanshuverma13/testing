import Vaccine from '../../model/farmData/farmDataVaccineModel.js'

export const createVaccine = async (req, res) => {
  try {
    const user = await Vaccine.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getVaccine = async (req, res) => {
  try {
    const user = await Vaccine.find({parentid:req.params.id});
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateVaccine = async (req, res) => {
  try {
    const user = await Vaccine.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteVaccine = async (req, res) => {
  try {
    const user = await Vaccine.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.send({ message: "User deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {createVaccine,getVaccine,updateVaccine,deleteVaccine}