import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import ConnectDB from './config/MongoConfig';
import cors from 'cors';
//routers
import userRouter from './routers/usersRouter';
import habitRouter from './routers/habitRouter';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
ConnectDB();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

// Define a simple route
app.use('/apiUser', userRouter);
app.use('/apiH1', habitRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
