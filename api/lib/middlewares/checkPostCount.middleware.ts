import {NextFunction, RequestHandler,Request,Response} from "express";
import {config} from "../config";

export const  checkPostCount: RequestHandler = (req:Request, res:Response,next:NextFunction) => {
    const {num}=req.params;
    const parsedValue = parseInt(num,10);
    if (isNaN(parsedValue)||parsedValue>=config.supportedPostCount) {
        return res.status(400).send('brak lub niepoprawna wartosc')
    }
    next();
}