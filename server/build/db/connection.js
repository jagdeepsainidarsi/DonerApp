"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose=require('mongoose');
var mongoose_1 = __importDefault(require("mongoose"));
var DB = 'mongodb+srv://jagdeep:jagdeep@cluster0.qrq4h.mongodb.net/myfirstmernstack?retryWrites=true&w=majority';
mongoose_1.default.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(function () {
    console.log("connected");
}).catch(function (err) { return console.log(err); });
