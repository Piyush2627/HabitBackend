import express from 'express';
import {
  createHabit,
  getHabits,
  deleteHabit,
  updateHabit,
} from '../controller/habitController';

const habitRouter = express.Router();

habitRouter.post('/habit/create', createHabit);
habitRouter.delete('/habit/delete/:id', deleteHabit);
habitRouter.get('/getHabits', getHabits);
habitRouter.put('/habit/update/:id', updateHabit);

export default habitRouter;
