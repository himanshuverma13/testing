import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getFarmerDetail } from "../../controller/farmData/farmerDetailController.js";
import { UserModel } from "../../model/user/user.js";

export const loginUser = async (data) => {
  try {
    // Check if user exists with the provided mobile number
    const user = await UserModel.findOne({ mobile: data?.mobile });
    if (!user) {
      return { status: 400, message: "this number is not register" };
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(data?.password, user?.password);
    if (!passwordMatch) {
      return { status: 404, message: "Password doesn't match" };
    }

    // Generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3 days",
    });

    // Fetch additional data
    const farmerDetail = await getFarmerDetail(user?._id);

    return {
      status: 200,
      message: "Login successful",
      token: token,
      uID: user?._id,
      userName: user?.firstName,
      date: new Date().toISOString(), // Example date format
      FarmName: farmerDetail,
      rId: "rId",
      sessionId: "sessionId"
    };
  } catch (error) {
    console.error("Login error:", error);
    return { status: 500, message: "Server error" };
  }
};

// export const UserGoogleLogin = async (req, res) => {
//   try {
//     const check_user = await UserModel.findOne({ email: req.body.email });

//     if (!check_user) {
//       const newRegister = await UserModel.create(req.body)
//     }
//     // .check again
//     const check_user_email = await UserModel.findOne({ email: req.body.email });

//     // genrate token
//     const token = jwt.sign({ userId: check_user_email._id }, process.env.JWT_SECRET, {
//       expiresIn: "3 days",
//     });
//     // get Farmer detail
//     const farmerDetail = await getFarmerDetail(check_user_email._id);

//     const responseObject = {
//       status: 200,
//       message: "Login successful",
//       token: token,
//       uID: check_user_email._id,
//       userName: check_user_email.firstName,
//       date: new Date().toISOString(),
//       FarmName: farmerDetail,
//       rId: "rId",
//       sessionId: "sessionId"
//     };

//     res.json(responseObject);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: "something went wrong please try again" });
//   }
// };

export const UserGoogleLogin = async (req, res) => {
  try {
    const { email } = req?.body;

    let user = await UserModel.findOne({ email });

    if (!user) {
      user = await UserModel.create(req?.body);
    }

    // Generate token
    const token = jwt.sign({ userId: user?._id }, process.env.JWT_SECRET, {
      expiresIn: "3 days",
    });

    // Get farmer details
    const farmerDetail = await getFarmerDetail(user?._id);

    const responseObject = {
      status: 200,
      message: "Login successful",
      token,
      uID: user?._id,
      userName: user?.firstName,
      date: new Date().toISOString(),
      FarmName: farmerDetail,
      rId: "rId",
      sessionId: "sessionId",
    };

    res.json(responseObject);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something went wrong, please try again" });
  }
};
