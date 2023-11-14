import { IsNumber, IsString } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  public unit: string;
  @IsString()
  public vinNumber:string;
  @IsString()
  public vehicleType:string;
  @IsString()
  public make: string;
  @IsString()
  public model: string;
  @IsString()
  public year: string;
  @IsString()
  public licensePlate:string;
  @IsString()
  public plateState:string;
  @IsNumber()
  public axle: number;
  @IsString()
  public fuelType: string;
  @IsString()
  public unladenWeight: string;
  @IsString()
  public gvw:string;

  // company?
}