const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const APP_NAME = process.env.APP_NAME || "webapp";
const HOST_PORT = process.env.HOST_PORT || PORT;

app.use(express.static(path.join(__dirname, "public")));   // serve public/index.html on /

app.listen(PORT, () => {
  console.log(`${APP_NAME} launched on http://localhost:${HOST_PORT}`);
});