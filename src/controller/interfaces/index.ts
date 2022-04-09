import { BasicResponse } from "../types";

export interface AboutControllerI {
    getMessage(name?: string): Promise<BasicResponse>;
}