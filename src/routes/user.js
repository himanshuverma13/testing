import express from "express";
import { UserRegistration } from "../controller/user/user.js";
import { createProductFeedback } from "../controller/user/productFeedbackController.js";
import { createServiceForm } from "../controller/user/serviceFormController.js";
import { createContactUs } from "../controller/user/contactController.js";
import { createBlog } from "../controller/user/blogController.js";
import { createTransactionIssue } from "../controller/user/transactionIssueController.js";
import {
  createAddToCart,
  deleteAddToCart,
  getCartData,
} from "../controller/user/addToCartController.js";
import { createTransaction, getTransaction } from "../controller/user/transactionController.js";
import {
  createParent,
  deleteParent,
  getParent,
  updateParent,
} from "../controller/farmData/farmDataParentController.js";
import {
  createChild,
  deleteChild,
  getChild,
  updateChild,
} from "../controller/farmData/farmDataChildController.js";
import {
  createMilk,
  deleteMilk,
  getMilk,
  updateMilk,
} from "../controller/farmData/farmDataMilkController.js";
import {
  createVaccine,
  deleteVaccine,
  getVaccine,
  updateVaccine,
} from "../controller/farmData/farmDataVaccineController.js";
import {
  createDeworm,
  deleteDeworm,
  getDeworm,
  updateDeworm,
} from "../controller/farmData/farmDataDewormController.js";
import {
  createHeat,
  deleteHeat,
  getHeat,
  updateHeat,
} from "../controller/farmData/farmDataHeatController.js";
import {
  createSanitation,
  deleteSanitation,
  getSanitation,
  updateSanitation,
} from "../controller/farmData/farmDataSanitationController.js";
import {
  createWean,
  deleteWean,
  getWean,
  updateWean,
} from "../controller/farmData/farmDataWeanController.js";
import { createFarmerDetail } from "../controller/farmData/farmerDetailController.js";
import verifyToken from "../../src/middleware/user/verifyToken.js";
import { forgetPassword } from "../controller/user/forgotPasswordController.js";
import { sendOtp, verifyOtp } from "../controller/user/optController.js";
import {
  createProductReview,
  getProductReview,
} from "../controller/user/productReviewController.js";
import { UserLogin } from "../controller/user/LoginController.js";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../controller/adminController/adminController.js";
import {
  createAdminBlog,
  deleteBlog,
  getAllBlog,
  getBlogById,
  updateBlog,
} from "../controller/adminController/adminBlogController.js";
import { UserGoogleLogin } from "../repository/user/loginRepository.js";
import { getDashboardDetails } from "../controller/adminController/adminDashboard.js";

const UserRouter = express.Router();

// User Registration
UserRouter.post("/user/register", UserRegistration);

// User Login
UserRouter.post("/user/login", UserLogin);
UserRouter.post("/user/google_login", UserGoogleLogin);
UserRouter.post("/user/forgot_password", forgetPassword);

// User OPT Vefication
UserRouter.post("/user/send_otp", sendOtp);
UserRouter.post("/user/verify_otp", verifyOtp);

// Transaction Route
UserRouter.post("/user/transaction", verifyToken, createTransaction);
UserRouter.get("/user/transaction",  getTransaction);

// Feedback
UserRouter.post("/user/feedback", verifyToken, createProductFeedback);

// Service Page Route
UserRouter.post("/user/service_form", createServiceForm);

// Contact Us Route
UserRouter.post("/user/contact_us", verifyToken, createContactUs);

// Blog Comment Route
UserRouter.post("/user/blog", verifyToken, createBlog);

// Transaction Issue Route
UserRouter.post("/user/transaction_issue", createTransactionIssue);

// Farmer Details Route
UserRouter.post("/user/farmer_detail", verifyToken, createFarmerDetail);

// Add to Cart Route
UserRouter.post("/user/cart",  createAddToCart);
UserRouter.delete("/user/cart/:id", deleteAddToCart);
UserRouter.get("/user/cart/:id", getCartData);

// Product Review Route
UserRouter.post("/user/review", verifyToken, createProductReview);
UserRouter.get("/user/review/:id", verifyToken, getProductReview);

// Animal Farm Data Route
//  Parent Routes
UserRouter.post("/user/farm_data/parent", createParent);
UserRouter.get("/user/farm_data/parent/:id", getParent);
UserRouter.put("/user/farm_data/parent/:id", verifyToken, updateParent);
UserRouter.delete("/user/farm_data/parent/:id", verifyToken, deleteParent);

//  Child Routes
UserRouter.post("/user/farm_data/child", verifyToken, createChild);
UserRouter.get("/user/farm_data/child/:id", verifyToken, getChild);
UserRouter.put("/user/farm_data/child/:id", verifyToken, updateChild);
UserRouter.delete("/user/farm_data/child/:id", verifyToken, deleteChild);

//  Milk Routes
UserRouter.post("/user/farm_data/milk", verifyToken, createMilk);
UserRouter.get("/user/farm_data/milk/:id", verifyToken, getMilk);
UserRouter.put("/user/farm_data/milk/:id", verifyToken, updateMilk);
UserRouter.delete("/user/farm_data/milk/:id", verifyToken, deleteMilk);

//  Vaccine Routes
UserRouter.post("/user/farm_data/vaccine", verifyToken, createVaccine);
UserRouter.get("/user/farm_data/vaccine/:id", verifyToken, getVaccine);
UserRouter.put("/user/farm_data/vaccine/:id", verifyToken, updateVaccine);
UserRouter.delete("/user/farm_data/vaccine/:id", verifyToken, deleteVaccine);

// Deworm Routes
UserRouter.post("/user/farm_data/deworm", verifyToken, createDeworm);
UserRouter.get("/user/farm_data/deworm/:id", verifyToken, getDeworm);
UserRouter.put("/user/farm_data/deworm/:id", verifyToken, updateDeworm);
UserRouter.delete("/user/farm_data/deworm/:id", verifyToken, deleteDeworm);

// Heat Routes
UserRouter.post("/user/farm_data/heat", verifyToken, createHeat);
UserRouter.get("/user/farm_data/heat/:id", verifyToken, getHeat);
UserRouter.put("/user/farm_data/heat/:id", verifyToken, updateHeat);
UserRouter.delete("/user/farm_data/heat/:id", verifyToken, deleteHeat);

// Sanitation Routes
UserRouter.post("/user/farm_data/sanitation", verifyToken, createSanitation);
UserRouter.get("/user/farm_data/sanitation/:id", verifyToken, getSanitation);
UserRouter.put("/user/farm_data/sanitation/:id", verifyToken, updateSanitation);
UserRouter.delete(
  "/user/farm_data/sanitation/:id",
  verifyToken,
  deleteSanitation
);

// Wean Routes
UserRouter.post("/user/farm_data/wean", verifyToken, createWean);
UserRouter.get("/user/farm_data/wean/:id", verifyToken, getWean);
UserRouter.put("/user/farm_data/wean/:id", verifyToken, updateWean);
UserRouter.delete("/user/farm_data/wean/:id", verifyToken, deleteWean);

// ----------------ADMIN SECTION -------------------------------------

// Admin Products Routes
UserRouter.post("/admin/create_product", createProduct);
UserRouter.get("/admin/get_all_product", getAllProduct);
UserRouter.get("/admin/get_product/:id", getProductById);
UserRouter.put("/admin/update_product/:id", updateProduct);
UserRouter.delete("/admin/delete_product/:id", deleteProduct);

//  Admin Blog Routes
UserRouter.post("/admin/create_blog", createAdminBlog);
UserRouter.get("/admin/get_all_blog", getAllBlog);
UserRouter.get("/admin/get_blog/:id", getBlogById);
UserRouter.put("/admin/update_blog/:id", updateBlog);
UserRouter.delete("/admin/delete_blog/:id", deleteBlog);

// Admin Dashboard routes
UserRouter.get("/admin/dashboard", getDashboardDetails);

export default UserRouter;
