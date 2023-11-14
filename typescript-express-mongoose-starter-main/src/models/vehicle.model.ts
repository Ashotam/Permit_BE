import { model, Schema, Document } from 'mongoose';
import { Vehicle } from '@/interfaces/vehicle.interface';

const vehicleSchema: Schema = new Schema({
  unit: {
    type: String,
    required: true,
    unique: true,
  },
  vinNumber: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  make: {
    type: String
  },
  model: {
    type: String
  },
  year: {
    type: String
  },
  licensePlate: {
    type: String
  },
  plateState: {
    type: String
  },
  axle: {
    type: Number
  },
  fuelType: {
    type: String
  },
  unladenWeight: {
    type: String
  },
  gvw: {
    type: String
  }
});

const vehicleModel = model<Vehicle & Document>('Vehicle', vehicleSchema);

export default vehicleModel;
