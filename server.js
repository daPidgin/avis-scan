import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Cloud Run + GitHub is working ✅");
});

app.get("/scan", (req, res) => {
  res.json({
    status: "ready",
    message: "Avis scan will run here"
  });
});

// REQUIRED
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
