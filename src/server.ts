import express from "express";

const app = express();

// // midlewares
app.use(express.json({ limit: '5000mb' }));
app.use(express.urlencoded({ limit: '5000mb' }));

// app.use(userRoutes);

const PORT = process.env.PORT || 3335;

app.listen(PORT);

console.log('Server on port', PORT);