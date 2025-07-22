const express = require("express");
const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin123") {
    return res.json({ token: "fake-jwt-token" });
  }
  res.status(401).json({ error: "Unauthorized" });
});

app.listen(3000, () => console.log("API listening on port 3000"));
