import {Request, Response} from 'express';
import {getManager, getRepository} from 'typeorm';
import axios from 'axios';

import {Users} from '../model/Users';

const api = axios.create({
    baseURL: process.env.REACT_APP_ENVIRO === "dev" ? process.env.REACT_APP_BASE_URL_DEV : process.env.REACT_APP_BASE_URL_PROD,
});


export const getUsersById = async (req: Request, res:Response) : Promise<Response> => {

    const {id}= req.params;

    const users = await getManager().query(`select
        u.mail,
        u.username,
        u.create_time,
        u.update_time,
        from users u
        where u.id = ${id};
    `)
    return res.json({'usuario' : users});
}