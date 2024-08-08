import { UserModel } from "../../model/user/user.js"
import bcrypt from 'bcrypt'

export const forgetPassword = async (req, res) => {
    try {
        const setPassword = await bcrypt.hash(req?.body?.newpassword, 10)
      const user = await UserModel.findOne({mobile:req?.body?.mobile});
      user.password = setPassword;
      await user.save();
      res.json({message:"password updated successfully"});
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  export default {forgetPassword}