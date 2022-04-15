import { Router } from "express";

import {
    getAllUsers,
    getUsersById
} from '../controller/UserController';

const route = Router();

route.get('/allusers', getAllUsers)
route.get('/usersbyid', getUsersById);

export default route;
