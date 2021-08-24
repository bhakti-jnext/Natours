const express = require('express');
const bookingController = require('./../controllers/bookingController');
const authenController = require('./../controllers/authenController');

const router = express.Router();

router.use(authenController.protect);

router.get(
  '/checkout-session/:tourId',
  authenController.protect,
  bookingController.getCheckoutSession
);
router.use(authenController.restrictTo('admin', 'lead-guide'));
router
  .route('/')
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

router
  .route('/:id')
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;
