import { Router } from "express";
import axios from "axios";
import * as fs from "fs";
const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ mensagem: "Alô mundo!!!" });
});

routes.post("/login", async (req, res) => {
  const { userName } = req.body;
  const response = await axios({
    method: "get",
    url: `https://api.github.com/users/${username}`,
    responseType: "arrayBuffer",
  });
  const image = Buffer.from(response.data, "binary").toString("base64");
  return res.end(image, "base64");
});

export default routes;
