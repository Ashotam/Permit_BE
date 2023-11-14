import { NextFunction, Request, Response } from 'express';
import { Vehicle } from '@/interfaces/vehicle.interface';
import vehicleService from '@/services/vehicle.service';
import { CreateVehicleDto } from '@/dtos/vehicle.dto';

class VehiclesController {
  public vehicleService = new vehicleService();

  public getVehicles = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllVehiclesData: Vehicle[] = await this.vehicleService.findAllVehicles();

      res.status(200).json({ data: findAllVehiclesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getVehicleById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const vehicleId: string = req.params.id;
      const findOneVehicleData: Vehicle = await this.vehicleService.findVehicleById(vehicleId);

      res.status(200).json({ data: findOneVehicleData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createVehicle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const vehicleData: CreateVehicleDto = req.body;
      const createVehicleData: Vehicle = await this.vehicleService.createVehicle(vehicleData);

      res.status(201).json({ data: createVehicleData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateVehicle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const vehicleId: string = req.params.id;
      const vehicleData: CreateVehicleDto = req.body;
      const updateVehicleData: Vehicle = await this.vehicleService.updateVehicle(vehicleId, vehicleData);

      res.status(200).json({ data: updateVehicleData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteVehicle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const vehicleId: string = req.params.id;
      const deleteVehicleData: Vehicle = await this.vehicleService.deleteVehicle(vehicleId);

      res.status(200).json({ data: deleteVehicleData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default VehiclesController;
