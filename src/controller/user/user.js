import { addUser } from "../../repository/user/add_user.js";

export const UserRegistration = async (req, res) => {
  try {
    const data = await addUser(req.body);
    res.status(data.status).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
