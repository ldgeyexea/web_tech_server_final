import express from 'express';
import {config} from "./config";
import Controller from "./interfaces/controller.interface";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from 'mongoose'
import {logApiCalls} from "./middlewares/logApiCalls";


class App{
    public app:express.Application;

    constructor(controllers:Controller[]) {
        this.app=express();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.connectToDataBase();
    }

    private initializeControllers(controllers: Controller[]){
        controllers.forEach((controller)=>{
            this.app.use('/',controller.router);
        })
    }
    private initializeMiddlewares():void{
        this.app.use(bodyParser.json());
        this.app.use(logApiCalls)

    }

    public listen():void {
        this.app.listen(config.port,()=>{
            console.log(`app listening on port ${config.port}`);
        });

    }
    private async connectToDataBase(): Promise<void>{
        try{
            await  mongoose.connect(config.databaseUrl);
            console.log(`connected to database at url ${config.databaseUrl}`);
        }catch (e) {
            console.error(`error connecting to DB`,e)
        }
        mongoose.connection.on('error',(e)=>{
            console.error(`error connecting to DB`,e);
        });

        mongoose.connection.on('disconnected',()=>{
            console.log(`Disconnected from DB`);
        })

        process.on('SIGINT',async ()=>{
            await mongoose.connection.close();
            console.log(`MongoDB connection closed by app termination`)
            process.exit(0);
        })

        process.on('SIGTERM',async ()=>{
            await mongoose.connection.close();
            console.log(`MongoDB connection closed by app termination`)
            process.exit(0);
        })

    }
}
export default App;