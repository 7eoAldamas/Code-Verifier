import { AboutController } from '../controller/AboutController';
import express, { Request, Response } from 'express';
import { BasicResponse } from '@/controller/types';
import { logInfomation } from '../utils/Logger';

/**
 * @param aboutRouter: Router AboutController
 */
let aboutRouter = express.Router();

// http://localhost:8000/api/about?name=[]
aboutRouter.route('/').get(async ( request: Request, response: Response) => {
    let name: any = request?.query?.name;
    logInfomation(' [GET] http://localhost:8000/api/about?name=[string] ');
    const controller: AboutController = new AboutController();
    const resp: BasicResponse = await controller.getMessage(name);
    return response.send(resp);
})

export default aboutRouter;
