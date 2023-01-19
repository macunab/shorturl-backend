import dotenv from 'dotenv';
const dotenvResult = dotenv.config();
if(dotenvResult.error) {
    throw dotenvResult.error;
}
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dbInit from './db/dbInit';
import { CommonRoutesConfig } from './helpers/commonRoutesConfig';
import { ReduceRoute } from './routes/reduce.route';

dbInit.connect(process.env.DB_CNN as string);
const PORT: number = parseInt( process.env.PORT as string, 10);
const app: Application = express();
const routes: Array<CommonRoutesConfig> = [];

app.use(cors);
app.use(helmet);
app.use(express.json());
routes.push(new ReduceRoute(app));
app.use('*', (req: Request, res: Response) => {
    res.status(404).json({
        ok: false,
        msg: 'Ohh you are lost, read the API documentation to find your way back home'
    })
})

app.listen( PORT, () => {
    console.log(`Server run on port ${PORT}`);
})