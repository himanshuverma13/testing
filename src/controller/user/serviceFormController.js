import ServiceForm from "../../model/user/serviceFormModel.js"

export const createServiceForm = async (req, res) => {
  try {
   await ServiceForm.create(req.body);
    res.status(201).send("form submitted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
