import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../helpers/errorHandler";

export const globalErrorHandler = async (
  error: Error & Partial<ErrorHandler>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message: string = error.statusCode
    ? error.message
    : "Internal Server Error";
  const statusCode: number = error.statusCode ?? 500;
  console.log(error)
  return res.status(statusCode).json({ message });
};
