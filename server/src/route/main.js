const express = require("express");
const router = express.Router();
const lineRoute = require("./lineapi");

const { get_maindata, post_maindata } = require("../controller/mainCon.js");
const { get_lineapi, post_lineapi } = require("../controller/lineCon.js");
router.get("/", get_maindata);
router.get("/line", get_lineapi);
router.post("/webhook", post_lineapi);
router.post("/", post_maindata);

module.exports = router;
