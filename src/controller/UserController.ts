import {Request, Response} from 'express';
import axios from 'axios';
import { AppData } from "../connection/AppData";

const api = axios.create({
    baseURL: process.env.REACT_APP_ENVIRO === "dev" ? process.env.REACT_APP_BASE_URL_DEV : process.env.REACT_APP_BASE_URL_PROD,
});

export const getAllUsers = async (req: Request, res: Response) : Promise <Response> =>{
    const users = await AppData.manager.query(` select
    u.id,
    u.username,
    u.email
    from users u
    `);

    return res.json(users);
}

export const getUsersById = async (req: Request, res:Response) : Promise<Response> => {

    const {id} = req.params;

    const users = await AppData.manager.query(`select
        u.email,
        u.username,
        u.create_time,
        u.update_time,
        from users u
        where u.id = ${id};
    `)
    return res.json({'usuario por id: ' : users});
}