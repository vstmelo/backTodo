import express from "express";
import route from "./routes/routes";
import cors from 'cors';
import "reflect-metadata"


const app = express();

app.use(cors());
app.use(express.json({ limit: '5000mb' }));
app.use(express.urlencoded({ limit: '5000mb' }));
app.use(route);


const PORT = process.env.PORT || 3335;

app.listen(PORT);

console.log('Server on port', PORT);