const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authenController = require('./../controllers/authenController');

const router = express.Router({ mergeParams: true });

router.use(authenController.protect);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authenController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    authenController.restrictTo('user', 'admin'),
    reviewController.updateReview
  )
  .delete(
    authenController.restrictTo('user', 'admin'),
    reviewController.deleteReview
  );

module.exports = router;
