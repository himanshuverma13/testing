import ContactUs from "../../model/user/contactModel.js"

export const createContactUs = async (req, res) => {
  try {
   await ContactUs.create(req.body);
    res.status(201).send("form submitted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
