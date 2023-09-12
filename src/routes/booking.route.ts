import express, { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middleware';
import BookingController from '../controllers/booking.controller';

const bookingRouter: Router = express.Router();

// get all bookings
const authMiddleware = new AuthMiddleware();
const bookingInstance = new BookingController();

// create a booking for an user
bookingRouter.post(
  '/users/:uid/tour_packages/:tid',
  authMiddleware.verifyUser,
  bookingInstance.createABooking
);

//get all booking for an admin
bookingRouter.get(
    '/users/:uid',
    authMiddleware.verifyUser,
    bookingInstance.getAllBookingsForAnUser
  );


  // get a booking for an user
bookingRouter.get(
    '/:bid/users/:uid',
    authMiddleware.verifyUser,
    bookingInstance.getABookingForAnUser
  );





// delete a booking for an user
bookingRouter.delete(
    '/:bid/users/:uid',
    authMiddleware.verifyUser,
    bookingInstance.deleteABooking
  );


  // get all bookings
bookingRouter.get(
  '/',
  authMiddleware.verifyUser,
  authMiddleware.checkAdminRole,
  bookingInstance.getAllBookings
);



export default bookingRouter;
