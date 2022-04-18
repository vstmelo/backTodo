import { Router } from "express";

import {
    getAllUsers,
    getUsersById,
    addNewUser,
    deleteUser
} from '../controller/UserController';

const route = Router();

route.get('/allusers', getAllUsers)
route.get('/user/:id', getUsersById);
route.post('/adduser', addNewUser);
route.post('/deluser/:id', deleteUser);

export default route;
