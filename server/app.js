import express from "express";
import cors from "cors";
require("dotenv").config();
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRoutes);

app.get("/", async (req, res) => {
  res.status(200).send({ message: "API is live!" });
});

export default app;
