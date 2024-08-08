import { config } from "dotenv";
config();
import twilio from "twilio";
import nodemailer from "nodemailer";
import { UserModel } from "../../model/user/user.js";

// Destructure environment variables
const { TWILIO_SERVICE_SID, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;

// Initialize Twilio client
const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

/**
 * Send OTP to user's phone and email
 */
export const sendOtp = async (req, res, next) => {
  const { countryCode, phoneNumber } = req.body;
  const emailOtp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    // Check if mobile number already exists
    const user = await UserModel.findOne({ mobile: phoneNumber });
    if (!user) {
      return res.status(400).json({
        status: 400,
        message: "This number is not registered",
      });
    }

    // Send OTP to mobile via Twilio
    await client.verify.v2.services(TWILIO_SERVICE_SID)
      .verifications.create({
        to: `+${countryCode}${phoneNumber}`,
        channel: "sms",
      });

    // Update user's email OTP in database
    user.otp = emailOtp;
    await user.save();

    // Send OTP via email
    await transporter.sendMail({
      from: `"RUMENO" <${EMAIL_USER}>`,
      to: user.email,
      subject: "Your OTP Code",
      text: `Your OTP code is ${emailOtp}`,
      html: `<h3>Your OTP is <h1>${emailOtp}</h1></h3>
      <p>Please use this code to reset your password. This OTP is valid for the next 60 seconds. Do not share this code with anyone.</p>
      <br>
      <p>Thank you,</p>
      <h2>RUMENO</h2>`,
    });

    res.status(200).json({
      status: 200,
      message: "OTP sent successfully!",
    });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to send OTP",
    });
  }
};

/**
 * Verify OTP
 */
export const verifyOtp = async (req, res, next) => {
  const { countryCode, phoneNumber, otp } = req.body;

  try {
    // Verify email OTP
    const user = await UserModel.findOne({ mobile: phoneNumber, otp });
    if (!user) {
      // Verify SMS OTP via Twilio if email OTP is not valid
      const verificationResponse = await client.verify.v2.services(TWILIO_SERVICE_SID)
        .verificationChecks.create({
          to: `+${countryCode}${phoneNumber}`,
          code: otp,
        });

      if (verificationResponse.status !== "approved") {
        return res.status(400).json({
          status: 400,
          message: "Invalid OTP",
        });
      }
    }

    res.status(200).json({
      status: 200,
      message: "OTP verified successfully",
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(400).json({
      status: 400,
      message: error.message || "Something went wrong!",
    });
  }
};

export default { sendOtp, verifyOtp };
