import mongoose from 'mongoose';
import mongoosePaginate from "mongoose-paginate-v2";

mongoose.pluralize(null);

const collection = 'adoptme_products';

const schema = new mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    code: { type: String, required: true },
    category: {type: String, required: true, index : false},
    thumbnail: { type: String, required: false},
    status: {type: Boolean, required: true, default: true},
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'users', default: "admin"}
});

schema.plugin(mongoosePaginate)

const model = mongoose.model(collection, schema);

export default model;