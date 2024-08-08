import { UserModel } from "../../model/user/user.js";
import bcrypt from 'bcrypt';

export const addUser = async (data) => {
    try {
        const check_user_email = await UserModel.findOne({ email: data?.email });
        const check_user_mobile = await UserModel.findOne({ mobile: data?.mobile });

        if (check_user_mobile) {
            return {
                status: 400,
                message: "Mobile number already exists"
            };
        }

        if (check_user_email) {
            return {
                status: 400,
                message: "Email already exists"
            };
        }

        data.password = await bcrypt.hash(data?.password, 10);
        const newUser = new UserModel(data);
        await newUser.save();

        return {
            status: 201,
            message: "You have registered successfully"
        };

    } catch (error) {
        console.error(error);
        return {
            status: 500,
            message: "something went wrong please try again"
        };
    }
};
