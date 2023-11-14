import { CreateCompanyDto } from '@dtos/company.dto';
import { HttpException } from '@exceptions/HttpException';
import { Company } from '@/interfaces/company.interface';
import companyModel from '@/models/company.model'; 
import { isEmpty } from '@utils/util';

class CompanyService {
  public companies = companyModel;

  public async findAllCompanies(): Promise<Company[]> {
    const companies: Company[] = await this.companies.find();
    return companies;
  }

  public async findCompanyById(companyId: string): Promise<Company> {
    if (isEmpty(companyId)) throw new HttpException(400, "CompanyId is empty");

    const findCompany: Company = await this.companies.findOne({ _id: companyId });
    if (!findCompany) throw new HttpException(409, "Company doesn't exist");

    return findCompany;
  }

  public async createCompany(CompanyData: CreateCompanyDto): Promise<Company> {
    if (isEmpty(CompanyData)) throw new HttpException(400, "CompanyData is empty");

    const findCompany: Company = await this.companies.findOne({ USDOT: CompanyData.USDOT });
    if (findCompany) throw new HttpException(409, `This USDOT ${CompanyData.USDOT} already exists`);

    const createCompanyData: Company = await this.companies.create({ ...CompanyData });

    return createCompanyData;
  }

  public async updateCompany(CompanyId: string, CompanyData: CreateCompanyDto): Promise<Company> {
    if (isEmpty(CompanyData)) throw new HttpException(400, "CompanyData is empty");

    if (CompanyData.USDOT) {
      const findCompany: Company = await this.companies.findOne({ USDOT: CompanyData.USDOT });
      if (findCompany && findCompany._id != CompanyId) throw new HttpException(409, `This USDOT ${CompanyData.USDOT} already exists`);
    }

    const updateCompanyById: Company = await this.companies.findByIdAndUpdate(CompanyId, { CompanyData });
    if (!updateCompanyById) throw new HttpException(409, "Company doesn't exist");

    return updateCompanyById;
  }

  public async deleteCompany(CompanyId: string): Promise<Company> {
    const deleteCompanyById: Company = await this.companies.findByIdAndDelete(CompanyId);
    if (!deleteCompanyById) throw new HttpException(409, "Company doesn't exist");

    return deleteCompanyById;
  }
}

export default CompanyService;
