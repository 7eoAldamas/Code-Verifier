import { BasicResponse } from "./types";
import { AboutControllerI } from "./interfaces";

export class AboutController implements AboutControllerI{

    public async getMessage(name?: string): Promise<BasicResponse> {        
        return {
            message: `Welcome ${name || 'internaut'} to my page`
        }
    }
    
}