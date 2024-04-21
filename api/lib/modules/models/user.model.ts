export interface IUser{
    __id:string;
    email:string;
    name:string;
    role?:string;
    active?:boolean;
    isAdmin?:boolean;
}