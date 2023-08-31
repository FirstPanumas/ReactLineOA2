const express = require("express");
const cors = require("cors");
const app = express();
const mainRoute = require("./route/main");


app.use(express.json());
app.use(cors());

port = process.env.port || 8000;
app.use("/api", mainRoute);


app.listen(port, () => console.log(`http://localhost:${port}`));
