import express, { Router } from 'express';
import SpotController from '../controllers/sport.controller';
import AuthMiddleware from '../middlewares/auth.middleware';

const spotRouter: Router = express.Router();

const spotInstance = new SpotController();
const authMiddleware = new AuthMiddleware();

// get all spots
spotRouter.get('/:id/spots', spotInstance.getAllSpots);

// get a spot
spotRouter.get('/:id/spots/:sid', spotInstance.getASpot);


spotRouter.post(
    '/:id/spots',
    authMiddleware.verifyUser,
    authMiddleware.checkAdminRole,
    spotInstance.createSpot
  );


  spotRouter.put(
    '/:id/spots/:sid',
    authMiddleware.verifyUser,
    authMiddleware.checkAdminRole,
    spotInstance.updateSpot
  );

  spotRouter.delete(
    '/:id/spots/:sid',
    authMiddleware.verifyUser,
    authMiddleware.checkAdminRole,
    spotInstance.deleteSpot
  );
  
  export default spotRouter;