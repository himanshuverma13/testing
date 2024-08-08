import { APIError } from "rest-api-errors";
import { UserModel } from "../../model/user/user.js";
import { getToken } from "../../helper/utils.js";

export const adminLogin = async (req, res, next) => {
  try {
    const {
      body: { email, password, rememberMe },
    } = req;

    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new APIError(422, "422", "User not registered");
    }

    if (!user?.role === "super admin") {
      throw new APIError(422, "422", "User not found");
    }
    const match = await user.comparePassword(password, user?.password);

    if (!match) {
      throw new APIError(422, "422", "Invailid credentials");
    }
    const token = getToken(user?._id, user?.email, rememberMe);
    sendOne(res, {
      login: true,
      token,
      _id: user?._id,
      email: user?.email,
      message: "Login successfully",
    });
  } catch (error) {
    next(error);
  }
};
