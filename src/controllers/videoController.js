export const home = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};

export const getAllVideos = (req, res) => {
  res.send("All Videos");
};
