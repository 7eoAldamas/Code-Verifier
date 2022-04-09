import express, { Request, Response } from 'express';
import { logInfomation } from '../utils/Logger';
import  aboutRouter  from "./AboutRouter";

/**
 * @param serverApp: Server Instance
 * @param rootRouter: Root Routers Instance
 */
let serverApp = express();
let rootRouter = express.Router();

// GET http://localhost:8000/api/
rootRouter.get('/', (request: Request, response: Response) => {
    logInfomation(' [GET] http://localhost:8000/api/ ');
    response.send('Hello Web - Leobardo Daniel Gonzalez Aldamas - Node');
})

// Redirections Routers
serverApp.use('/', rootRouter); // http://localhost:8000/api/
serverApp.use('/about', aboutRouter); //  http://localhost:8000/api/about/

export default serverApp;

/**
 * TODO: Add more routers to the app
 */
