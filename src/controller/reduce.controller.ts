import { Request, Response } from "express";
import reduceModel from "../models/reduce.model";


class ReduceController {

    async reduce(req: Request, res: Response) {

        const { url } = req.body;
        const reduce = new reduceModel({
            originalUrl: url,
            short: 'aca va el codigo generado por shortuuid'
        })
        try {
            //si el short generado no existe 
            await reduce.save();
            res.status(200).json({
                ok: true,
                msg: 'url reduced successfully'
            });
        } catch( error ) {
            res.status(400).json({
                ok: false,
                msg: 'an error ocurred while trying reduce the url'
            });
        }
    }

    getReduce(req: Request, res: Response) {
        console.log('LLEGO AL GET REDUCE');
        const { id } = req.params;
        console.log(id);
        return res.status(200).json({
            ok: true,
            msg: 'entro al get'
        })
    }

}

export default new ReduceController();