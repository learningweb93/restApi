import type { NextFunction, Response, Request } from 'express';
import type { HttpError } from 'http-errors';
import config from '../config/config.js';

const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    error: {
      message: err.message,
      status: statusCode,
      errorStack: config.nodeEnv === 'production' ? undefined : err.stack,
    },
  });
  next();
};

export default globalErrorHandler;
