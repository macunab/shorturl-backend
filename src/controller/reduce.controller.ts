import { Request, Response } from "express";


class ReduceController {

    reduce(req: Request, res: Response) {

        return res.status(200).json({
            ok: true,
            msg: 'entro al reduce'
        });
    }

    async getReduce(req: Request, res: Response) {

    }

}

export default new ReduceController();