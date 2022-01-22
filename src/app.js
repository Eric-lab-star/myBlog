import express from "express";
import "dotenv/config";
import { getPage } from "./notion";

const app = express();
const PORT = 4000;

const home = async (req, res) => {
  const videos = await getPage();
  res.json(videos);
};
app.use(express.static("src/public"));
app.get("/video", home);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
