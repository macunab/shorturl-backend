import { Request, Response } from "express";
import { generateShortUuid } from "custom-uuid";
import reduceModel from "../models/reduce.model";


class ReduceController {

    async reduce(req: Request, res: Response) {

        const { url } = req.body;
        let exist = false;
        let shortUuid: string;
        do {
            shortUuid = generateShortUuid(); 
            const shortUrlExist = await reduceModel.findOne({ short: shortUuid });
            if(shortUrlExist) {
                exist = true;
            }
        } while(exist);
        
        const reduce = new reduceModel({
            originalUrl: url,
            short: shortUuid
        })
        try {
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

    async originalUrl(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const short = await reduceModel.findOne({ short : id });
            if(!short) {
                return res.status(500).json({
                    ok: false,
                    msg: 'The short url doesnt exist'
                })
            }
            res.status(200).json({
                ok: true,
                originalUrl: short.originalUrl,
                msg: 'Get the original url successfully'
            })
        } catch(error) {
            res.status(400).json({
                ok: false,
                msg: 'An erro ocurred while trying get the original url'
            });
        }
    }

}

export default new ReduceController();