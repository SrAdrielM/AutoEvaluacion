import mongoose from "mongoose";
import {config} from "./src/config.js"

mongoose.connect(config.db.URI);

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("DB is connected uwu");
})

connection.once("disconnected", () => {
    console.log("DB is disconnected owo");
})

connection.once("error", () => {
    console.log("error found: 7u7: " + error );
})