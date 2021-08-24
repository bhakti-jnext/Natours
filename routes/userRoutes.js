const express = require('express');
const userController = require('./../controllers/userController');
const authenController = require('../controllers/authenController');

const router = express.Router();

router.post('/signup', authenController.signup);
router.post('/login', authenController.login);
router.get('/logout', authenController.logout);

router.post('/forgotPassword', authenController.forgotPassword);
router.patch('/resetPassword/:token', authenController.resetPassword);

// Protect all routers after this middleware
router.use(authenController.protect);

router.patch('/updateMyPassword', authenController.updatedPassword);
router.get('/me', userController.getMe, userController.getUser);
router.patch(
  '/updateMe',
  userController.uplodUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);
router.delete('/deleteMe', userController.deleteMe);

router.use(authenController.restrictTo('admin'));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
