import express from "express";
import routes from "./routes.js";
import { dataSource } from "../data-source.js";

const app = express();

app.use(express.json());
dataSource.initialize()
app.use(routes);
const port = 3334;

app.listen(port, console.log(`Server port ${ port }`));


