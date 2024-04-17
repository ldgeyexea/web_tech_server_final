import Controller from "../interfaces/controller.interface";
import {NextFunction, Request, response, Response, Router} from "express";
import {array} from "joi";
import {checkPostCount} from "../middlewares/checkPostCount.middleware";
import DataService from "../modules/services/data.service";

let testArr = [1, 3, 4, 8, 7, 6, 1, 2, 6, 3, 9];

class PostController implements Controller {
    public path = '/api/post';
    public router = Router();
    private dataService = new DataService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}s`, this.getAll);
        this.router.get(`${this.path}/:id`, this.getElementById);//thisone
        this.router.post(`${this.path}`, this.addData);//thisone
        this.router.delete(`${this.path}/:id`, this.deleteSelected)
        this.router.delete(`${this.path}`, this.deleteAll)
        this.router.post(`${this.path}/:num`,checkPostCount,this.getFew)
    }

    private getAll = async (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json(testArr);
    }
    private getElementById = async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params;
        const allData = await this.dataService.query({_id: id});
        response.status(200).json(allData);
    }

    private addData = async (request: Request, response: Response, next: NextFunction) => {
        const {title, text, image} = request.body;

        const readingData = {
            title,
            text,
            image
        };

        try {
            await this.dataService.createPost(readingData);
            response.status(200).json(readingData);
        } catch (error) {
            console.log('eeee', error)

            console.error(`Validation Error: ${error.message}`);
            response.status(400).json({error: 'Invalid input data.'});
        }
    }

    private deleteSelected = async(req: Request, res: Response, next: NextFunction) => {
        const {id} = req.params;

        if (isNaN(parseInt(id))) {
            return res.status(400).json({error: 'Invalid number provided'});
        }

        if (parseInt(id) >= testArr.length||parseInt(id)<0) {
            return res.status(400).json({error: 'out of scope'});
        }

       testArr=testArr.filter((value,index)=>{
           return index!==parseInt(id)
       })
        res.status(200).json(true);
    }
    private deleteAll=async(req: Request, res: Response, next: NextFunction)=>{
        testArr=[];
        res.status(200).json(true);
    }
    private getFew=async(req: Request, res: Response, next: NextFunction)=>{
        const {num} = req.params;
        if (isNaN(parseInt(num))) {
            return res.status(400).json({error: 'wrong number provided'});
        }
        if (parseInt(num) > testArr.length||parseInt(num)<0) {
            return res.status(400).json({error: 'out of scope'});
        }


        let fLength=(parseInt(num)>(testArr.length))?testArr.length:parseInt(num);

        let supArr=testArr.filter((value,index)=>{
            return index<fLength
        })

        res.status(200).json(supArr);
    }
}

export default PostController;