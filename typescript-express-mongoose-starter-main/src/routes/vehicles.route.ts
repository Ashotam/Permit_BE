import { Router } from 'express';
import VehiclesController from '@controllers/vehicles.controller';
import { CreateVehicleDto } from '@dtos/vehicle.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class VehiclesRoute implements Routes {
  public path = '/vehicles';
  public router = Router();
  public vehiclesController = new VehiclesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.vehiclesController.getVehicles);
    this.router.get(`${this.path}/:id`, this.vehiclesController.getVehicleById);
    this.router.post(`${this.path}`, validationMiddleware(CreateVehicleDto, 'body'), this.vehiclesController.createVehicle);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateVehicleDto, 'body', true), this.vehiclesController.updateVehicle);
    this.router.delete(`${this.path}/:id`, this.vehiclesController.deleteVehicle);
  }
}

export default VehiclesRoute;
