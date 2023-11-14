import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import CompaniesRoute from '@/routes/companies.route';
import VehiclesRoute from '@/routes/vehicles.route';

import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new CompaniesRoute(), new VehiclesRoute()]);

app.listen();