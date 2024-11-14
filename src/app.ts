import express from 'express';
import router from './controllers/routes';
import cors from 'cors';

function createApp() {
    const app = express();

    app.use(express.json());

    app.use('/api', router);

    app.use(cors());

    return app;
}

export default createApp;
