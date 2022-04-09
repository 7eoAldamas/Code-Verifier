import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';

import  serverApp  from '../routes';

dotenv.config();

/**
 * @param server: Express APP
 */
const server = express();

server.use('/api', serverApp);

server.use(cors());
server.use(helmet());

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({limit: '50mb'}));

// Redirect Router
server.get('/', (request: Request, response: Response) => {
    response.redirect('/api');
})

export default server;

/**
 * TODO: Implement HTTPS to app
 * TODO: Mongoose Connection - Mongo DB
 */
