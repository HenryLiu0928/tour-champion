const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const Router = express.Router();

Router.get(
  '/',
  bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewsController.getOverview,
);

Router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);

Router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);

Router.get('/me', authController.protect, viewsController.getAccount);
Router.get('/my-tours', authController.protect, viewsController.getMyTours);

Router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData,
);

module.exports = Router;
