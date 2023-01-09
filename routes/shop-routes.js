const express = require('express');
const router = express.Router();
const {getAlltickets, pendtickets, reservetickets, canceltickets, createMatch,get_match} = require('../controllers/shop-controller');

router.route("/").get(getAlltickets);
router.route("/pending").patch(pendtickets);
router.route("/reserved").patch(reservetickets);
router.route("/cancelled").patch(canceltickets);
router.route("/match").post(createMatch);
router.route("/:id").get(get_match);

module.exports = router;

