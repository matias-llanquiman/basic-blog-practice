import app from "./app/index.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || "3000";

app.use(
  cors({
    origin: "http://localhost:4000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: false,
  }),
);

app.listen(port, () => {
  console.log(`Express hello world on port ${port} `);
});
