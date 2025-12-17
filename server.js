import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";



// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors({
  origin: "*"
}));

// api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.post("/api/voice", (req, res) => {
  // const audio = req.file;

  const text =
    "A cardiologist is a medical doctor who specializes in diagnosing and treating diseases of the heart and blood vessels, focusing on prevention, management, and long-term heart health as a Cardiologist";

 
  res.json({
    text,
  });
});



app.listen(port, () => console.log("Server started", port));
