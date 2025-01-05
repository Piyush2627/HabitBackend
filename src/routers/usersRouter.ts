import express from 'express';
import {
  addUser,
  allUsers,
  userById,
  updateEmail,
} from '../controller/userController';
const userRouter = express.Router();

userRouter.get('/allUsers', allUsers);
userRouter.post('/addUser', addUser);
userRouter.get('/getUser/:id', userById);
userRouter.put('/UpdateUsers/:id/edit', updateEmail);

export default userRouter;
