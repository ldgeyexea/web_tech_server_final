import {IUser} from "../models/user.model";
import UserModel from "../schemas/user.schema"

class UserService{
    public async createNewOrUpdate(user:IUser){
        console.log(user)//comment later on
        try{
            if(!user.__id){
                const  dataModel=new UserModel(user);
                return await dataModel.save();
            }else {
                return await UserModel.findByIdAndUpdate(user.__id,{$set:user},{new:true})
            }
        }catch (error){
            console.error("error whilst creating user",error);
            throw new  Error("error whilst creating user")
        }
    }
    public async getByEmailOrName(name:string){
        try {
            const result = await UserModel.findOne({ $or: [{ email: name }, { name: name }] });
            if (result) {
                return result;
            }
        } catch (error) {
            console.error('Wystąpił błąd podczas pobierania danych:', error);
            throw new Error('Wystąpił błąd podczas pobierania danych');
        }

    }

}
export default UserService;