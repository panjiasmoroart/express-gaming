const express = require("express");
const router = express.Router();
const { index } = require("./controller");
const { isLoginAdmin } = require("../middleware/auth");

// sebelum masuk ke router dashboard di harus melewatkan middleware authnya
router.use(isLoginAdmin);
router.get("/", index);

module.exports = router;
