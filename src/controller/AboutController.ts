import { AboutControllerI } from "./interfaces";
import { logSuccess } from "../utils/Logger";
import { BasicResponse } from "./types";

/**
 * @class AboutController
 */
export class AboutController implements AboutControllerI{
    public async getMessage(name?: string): Promise<BasicResponse> {        
        logSuccess('[GET, Request] - AboutController: /api/about ');
        return {
            message: `Hello Web! - 7eo Aldamas [About] || ${name || ':D'}` ,
        }
    }       

}