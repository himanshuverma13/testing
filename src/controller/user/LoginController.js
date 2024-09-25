import { loginUser } from "../../repository/user/loginRepository.js";



export const UserLogin = async (req, res) => {
    try {
      console.log('req.body: ', req.body);
        const data = await loginUser(req.body);
        res.json(data);
      } catch (error) {
        res.status(400).send(error.message);
      }
   
};
