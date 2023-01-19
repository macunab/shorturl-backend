import { Request, Response } from "express";


class ReduceController {

    reduce(req: Request, res: Response) {

        return res.status(200).json({
            ok: true,
            msg: 'entro al reduce'
        });
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