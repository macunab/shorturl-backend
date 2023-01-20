import { Document, model, Schema } from 'mongoose';
import { Reduce } from '../interfaces/reduce.interface';

const reduceSchema = new Schema({
    originalUrl: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        unique: true
    }
});

const reduceModel = model<Reduce & Document>('Reduce', reduceSchema);
export default reduceModel;