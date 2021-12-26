import express from 'express';

// import controller(service)
import { createUser, 
        getUsers, 
        getUserById, 
        updateUserById,
        deleteUserById } from '../controllers/users.js';

const router = express.Router();

// get all users
router.get('/', getUsers);

// create operation => req.body
router.post('/', createUser);

// get a user => req.params => {id: ....}
router.get('/:id', getUserById);

// delete a user
router.delete('/:id', deleteUserById);

// update the user detail (patch request)
router.post('/:id', updateUserById);

export default router;