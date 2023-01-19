import { Application } from "express";
import { check } from "express-validator";
import reduceController from "../controller/reduce.controller";
import { CommonRoutesConfig } from "../helpers/commonRoutesConfig";
import validateFields from "../middlewares/validateFields";


export class ReduceRoute extends CommonRoutesConfig {
    
    constructor(app: Application) {
        super(app, 'Reduce Routes');
    }

    configureRoutes(): Application {
        this.app.route('/api/reduce')
            .post(
                check('url', 'The URL is required').not().isEmpty(),
                validateFields.verifyErrors,
                reduceController.reduce
            );

        this.app.route('/api/reduce/:id')
                .get(
                    reduceController.getReduce
                )

        return this.app;
    }

}