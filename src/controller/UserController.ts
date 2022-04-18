import { Request, Response } from 'express';
import axios from 'axios';
import { AppData } from "../connection/AppData";
import { Users } from '../model/Users';
import { Any } from 'typeorm';
import { MeasureMemoryMode } from 'vm';


const api = axios.create({
    baseURL: process.env.REACT_APP_ENVIRO === "dev" ? process.env.REACT_APP_BASE_URL_DEV : process.env.REACT_APP_BASE_URL_PROD,
});

export const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await AppData
        .createQueryBuilder(Users, "users")
        .getMany();
    return res.json({ "resposta : ": users });
}

export const getUsersById = async (req: Request, res: Response): Promise<Response> => {
   const id = req.params
    const result = await AppData
    .createQueryBuilder(Users,"user")
    .where("user.id = :id ", { id: id  })
    .getOneOrFail()
    return res.json(result)
}



export const addNewUser = async (req: Request, res: Response): Promise<Response> => {
    const users = await AppData
    .getRepository(Users)
    .create(req.body);
   
    const result = await AppData
    .getRepository(Users)
    .save(users);
    
    return res.json(result)

}

export const deleteUser = async (req: Request, res: Response): Promise <Response> => {
    const id = req.params;

    const user =  AppData.manager
        .createQueryBuilder(Users, "user")
        .delete()
        .where("id = :id", { id: `${id}` })
        
        return res.json('Deletado !!1')
}