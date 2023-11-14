import { CreateVehicleDto } from '@dtos/vehicle.dto';
import { HttpException } from '@exceptions/HttpException';
import { Vehicle } from '@/interfaces/vehicle.interface';
import vehicleModel from '@/models/vehicle.model'; 
import { isEmpty } from '@utils/util';

class VehicleService {
  public vehicles = vehicleModel;

  public async findAllVehicles(): Promise<Vehicle[]> {
    const vehicles: Vehicle[] = await this.vehicles.find();
    return vehicles;
  }

  public async findVehicleById(vehicleId: string): Promise<Vehicle> {
    if (isEmpty(vehicleId)) throw new HttpException(400, "VehicleId is empty");

    const findVehicle: Vehicle = await this.vehicles.findOne({ _id: vehicleId });
    if (!findVehicle) throw new HttpException(409, "Vehicle doesn't exist");

    return findVehicle;
  }

  public async createVehicle(VehicleData: CreateVehicleDto): Promise<Vehicle> {
    if (isEmpty(VehicleData)) throw new HttpException(400, "VehicleData is empty");

    const findVehicle: Vehicle = await this.vehicles.findOne({ USDOT: VehicleData.unit});
    if (findVehicle) throw new HttpException(409, `This USDOT ${VehicleData.unit} already exists`);

    const createVehicleData: Vehicle = await this.vehicles.create({ ...VehicleData });

    return createVehicleData;
  }

  public async updateVehicle(VehicleId: string, VehicleData: CreateVehicleDto): Promise<Vehicle> {
    if (isEmpty(VehicleData)) throw new HttpException(400, "VehicleData is empty");

    if (VehicleData.unit) {
      const findVehicle: Vehicle = await this.vehicles.findOne({ USDOT: VehicleData.unit });
      if (findVehicle && findVehicle._id != VehicleId) throw new HttpException(409, `This USDOT ${VehicleData.unit} already exists`);
    }

    const updateVehicleById: Vehicle = await this.vehicles.findByIdAndUpdate(VehicleId, { VehicleData });
    if (!updateVehicleById) throw new HttpException(409, "Vehicle doesn't exist");

    return updateVehicleById;
  }

  public async deleteVehicle(VehicleId: string): Promise<Vehicle> {
    const deleteVehicleById: Vehicle = await this.vehicles.findByIdAndDelete(VehicleId);
    if (!deleteVehicleById) throw new HttpException(409, "Vehicle doesn't exist");

    return deleteVehicleById;
  }
}

export default VehicleService;
