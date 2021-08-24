const express = require('express');
const viewsController = require('../controllers/viewsController');
const authenController = require('../controllers/authenController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get(
  '/',
  bookingController.createBookingCheckout,
  authenController.isLoggedIn,
  viewsController.getOverview
);
router.get('/tour/:slug', authenController.isLoggedIn, viewsController.getTour);
router.get('/login', authenController.isLoggedIn, viewsController.getLoginForm);
router.get('/me', authenController.protect, viewsController.getAccount);
router.get('/my-tours', authenController.protect, viewsController.getMyTours);

router.post(
  '/submit-user-data',
  authenController.protect,
  viewsController.updateUserData
);

module.exports = router;
