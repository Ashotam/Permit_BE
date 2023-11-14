import { model, Schema, Document } from 'mongoose';
import { Company } from '@/interfaces/company.interface';

const companySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  dba: {
    type: String,
    required: true,
  },
  USDOT: {
    type: Number,
    required: true,
    unique: true
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zipCode: {
    type: String
  },
  legalName: {
    type: String
  }
});

const companyModel = model<Company & Document>('Company', companySchema);

export default companyModel;
