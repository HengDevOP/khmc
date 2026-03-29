const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";
const DISCORD_INVITE_URL =
  process.env.DISCORD_INVITE_URL || "https://discord.gg/P7tQdXkwEX";

app.use(express.static(__dirname));

app.get("/invite", (req, res) => {
  res.redirect(DISCORD_INVITE_URL);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, HOST, () => {
  console.log(`KHMC.NET server running on http://${HOST}:${PORT}`);
});
