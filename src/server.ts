import express from "express";
// import cors from 'cors';
// import userRoutes from './routes/user.routes';
import { createConnection } from "typeorm";
// import morgan from 'morgan';

const app = express();

// // midlewares
// app.use(cors());
// app.use(express.json({limit: '5000mb'}));
// app.use(express.urlencoded({limit: '5000mb'}));
// app.use(morgan('dev'));
// app.use(userRoutes);

// // faz conexao com o banco de dados 
createConnection();

const PORT = process.env.PORT || 3335;
app.listen(PORT);
console.log('Server on port', PORT);