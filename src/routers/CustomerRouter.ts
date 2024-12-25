import express from 'express';
import {
  addUser,
  allUsers,
  userById,
  updateEmail,
} from '../controller/userController';
const router = express.Router();

router.get('/users', allUsers);
router.post('/addUser', addUser);
router.get('/users/:id', userById);
router.put('/users/:id/edit', updateEmail);

export default router;
