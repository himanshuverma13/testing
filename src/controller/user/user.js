import { addUser } from "../../repository/user/add_user.js";

// export class UserRegistration {
//   async UserRegistration(req, res) {
//     const data = await addUser(req.body);
//     console.log("data", data);
//     res.status(data.status).json(data);
//   }
// }


export const UserRegistration = async (req, res) => {
  try {
    const data = await addUser(req.body);
    res.status(data.status).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
