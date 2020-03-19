var express = require("express"),
    router = express.Router()

router.get("/", (req, res) => {
    res.render("home", {title: "TOVA"})
});

module.exports = router