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
import path from 'path';

dbInit.connect(process.env.DB_CNN as string);
const PORT: number = parseInt( process.env.PORT as string, 10);
const app: Application = express();
const routes: Array<CommonRoutesConfig> = [];
console.log('ENTRO');

app.use(helmet());
app.use(cors());
app.use( express.static('short-url'));
app.use(express.json());
routes.push(new ReduceRoute(app));
app.get('*', (req: Request, res: Response) => {
    res.sendFile( path.resolve(__dirname, 'index.html'));
})

app.listen( PORT, () => {
    console.log(`Server run on port ${PORT}`);
})