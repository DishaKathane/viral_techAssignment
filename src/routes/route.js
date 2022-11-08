const express = require('express')
const router = express.Router()
const {randomUser,dataFromRandomUser} = require('../controllers/controller')

router.get('/randomuser',randomUser)
router.get('/populateData', dataFromRandomUser)

//Validating the endpoint
router.all("/*", function (req, res) {
    return res
      .status(404)
      .send({ status: false, message: "Page Not Found" });
});

module.exports = router