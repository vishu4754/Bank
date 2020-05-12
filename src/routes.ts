import { Router } from 'express';
import accHandler from './controller/Accounts/routes';

const routeHandler = Router();

routeHandler.use('/accounts',accHandler);

export default routeHandler;