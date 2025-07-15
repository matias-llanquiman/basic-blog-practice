import express from "express";
import router from "./routes/post.route.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/blog", router);

export default app;
