import { loginUser } from "../../repository/user/loginRepository.js";



export const UserLogin = async (req, res) => {
    try {
        const data = await loginUser(req.body);
        res.json(data);
      } catch (error) {
        res.status(400).send(error.message);
      }
   
};
