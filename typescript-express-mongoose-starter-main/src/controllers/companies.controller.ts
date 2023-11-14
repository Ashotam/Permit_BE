import { NextFunction, Request, Response } from 'express';
import { Company } from '@/interfaces/company.interface';
import companyService from '@/services/company';
import { CreateCompanyDto } from '@/dtos/company.dto';

class CompaniesController {
  public companyService = new companyService();

  public getCompanies = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllCompaniesData: Company[] = await this.companyService.findAllCompanies();

      res.status(200).json({ data: findAllCompaniesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCompanyById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const companyId: string = req.params.id;
      const findOneCompanyData: Company = await this.companyService.findCompanyById(companyId);

      res.status(200).json({ data: findOneCompanyData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCompany = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const companyData: CreateCompanyDto = req.body;
      const createCompanyData: Company = await this.companyService.createCompany(companyData);

      res.status(201).json({ data: createCompanyData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCompany = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const companyId: string = req.params.id;
      const companyData: CreateCompanyDto = req.body;
      const updateCompanyData: Company = await this.companyService.updateCompany(companyId, companyData);

      res.status(200).json({ data: updateCompanyData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCompany = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const companyId: string = req.params.id;
      const deleteCompanyData: Company = await this.companyService.deleteCompany(companyId);

      res.status(200).json({ data: deleteCompanyData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default CompaniesController;
