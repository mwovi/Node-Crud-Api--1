//jshint esversion: 9

import express from 'express';


import{ createUser, getUsers, getUser, deleteUser, editUser } from '../controllers/users.js';

const router = express.Router();


//All routes here are starting with '/users'
router.get('/', getUsers);


router.post('/', createUser);


router.get('/:id', getUser);

router.delete('/:id', deleteUser);


router.patch('/:id', editUser);



export default router;