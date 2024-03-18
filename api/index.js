import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import messageRouter from './routes/message.route.js'
import cookieParser from "cookie-parser";
import path from 'path';

dotenv.config();
const __dirname = path.resolve();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/messages', messageRouter);

app.use((err, req, resp, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return resp.status(statusCode).json({
    success: false,
    message,
    statusCode,
  })
})

app.listen(3000, () => console.log("Server in running on port : 3000!!"));
