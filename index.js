import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { Dbconnection } from "./src/config/main.js";
import UserRouter from "./src/routes/user.js";
import cors from "cors";

const app = express();

const corsMethod = {
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
};

Dbconnection();
app.use(bodyParser.json());
app.use(cors(corsMethod));
app.use("/api", UserRouter);
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
