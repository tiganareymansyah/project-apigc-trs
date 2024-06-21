import express from "express";
import cors from "cors";
import { dataGuitarChords } from "./data-api.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/api/guitarchordstrs", (_req, res) => {
  res.send({
    code: "200",
    status: "success",
    message: "Data Found",
    data: dataGuitarChords
  });
});

app.listen(3000, () => console.log("Server berjalan..."));
