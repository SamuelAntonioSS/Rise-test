import cookieParser from "cookie-parser";
import express from "express";


const app = express();

app.use(express.json());

app.use(cookieParser());

// Exportacion para usar en otros archivos 
export default app;