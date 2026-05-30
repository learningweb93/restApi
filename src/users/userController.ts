import type { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';

const createUser = (req: Request, res: Response, next: NextFunction) => {
  console.log('Received user registration request:', req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    const error = createHttpError(400, 'All fields are required');
    return next(error);
  }
  res.status(201).json({ message: 'User created successfully' });
  return res.status(201).json({ message: 'User created successfully' });
};

export { createUser };
