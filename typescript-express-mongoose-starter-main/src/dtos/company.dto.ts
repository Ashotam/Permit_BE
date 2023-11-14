import { IsNumber, IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  public name: string;
  
  @IsString()
  public dba:string;
  @IsNumber()
  public USDOT:number;
  @IsString()
  public address: string;
  @IsString()
  public city: string;
  @IsString()
  public state: string;
  @IsString()
  public zipCode: string;
  @IsString()
  public legalName:string;
}