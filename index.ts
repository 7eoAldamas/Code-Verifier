import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

dotenv.config();

// Create Express APP
const app = express();

const port: string | number = process.env.PORT || 8000;

// Define the firts route of APP
app.get('/', (request: Request, response: Response) => {
    // Hello World :D
    response.send('Hello World - Leobardo Daniel Gonzalez Aldamas - Node');
});

// Define the firts route of APP
app.get('/About', (request: Request, response: Response) => {
    // Hello World :D
    response.send('Leobardo Daniel Gonzalez Aldamas - Node - First Time');
});


// Execute APP
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});

