import express from 'express';
import globalErrorHandler from './middleware/globalErrorHandler.js';
import userRouter from './users/userRouter.js';

const app = express();
app.use(express.json());

app.use('/api/v1/users', userRouter);

app.use(globalErrorHandler);

export default app;
