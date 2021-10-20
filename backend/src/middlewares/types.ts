import { Request, Response, NextFunction } from 'express'

type MiddlewareHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => Promise<any> | any

export default MiddlewareHandler
