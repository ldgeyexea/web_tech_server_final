import {NextFunction, RequestHandler,Request,Response} from "express";
import {config} from "../config";

export const  logApiCalls: RequestHandler = (req:Request, res:Response,next:NextFunction) => {
 console.log(`[${req.method} ${req.url} ${req.ip} ${new Date().toISOString()}]`);
next();
}