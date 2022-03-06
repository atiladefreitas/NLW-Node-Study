import "reflect-metadata"
import express, { response } from "express";

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json())

app.use(router) //this is a middleware | iserir rotas em nosso server

app.listen(3000, () => console.log("Server is running"));