const express = require('express');
const router = express.Router();
const admin = require('../middleware/admin.middleware');
const test = require('../Controller/test.controller');
// router.use(admin.test);
router.get("/msg/:age?",admin.test,(req, res) => {
    res.json({"message": "Hello , you age is "+req.params.age+""});
});

router.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

router.get('/test',test.test1);

module.exports = router;