import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import connectDB from "./config/db.js";
import { errorHandler } from "./middleware/error.middleware.js";
import { requestLogger } from "./middleware/logger.middleware.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(requestLogger);

app.use("/api", routes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});