import express from "express";
import "dotenv/config";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/", globalRouter);
app.use("/video", videoRouter);
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
