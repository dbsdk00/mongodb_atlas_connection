import mongoose, { model } from "mongoose";

const dataSchema = new mongoose.Schema({
    name: {type: String},
    age: {type:Number}
});

const Model = mongoose.model("dukyoung", dataSchema, "dukyoung")
export default Model;