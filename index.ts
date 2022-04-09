import { logSuccess, logError } from './src/utils/Logger';
import server  from './src/server';
import dotenv from 'dotenv';

dotenv.config();

const port: string | number = process.env.PORT || 8000;

// Execute APP
server.listen(port, () => {
    logSuccess(` [EXPRESS SERVER]: Running at http://localhost:${port}/api `);
})

// Server Failed
server.on('error', (error) => {
    logError(` [ERROR EXPRESS SERVER] ${error}`);
})
