import habitSchema from '../model/habitSchema';
import express from 'express';

export const createHabit = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const newHabit = new habitSchema({
      ...req.body,
      dates: new Date(),
    });
    await newHabit.save();
    res.status(201).json(newHabit);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Not able to create a habit' });
  }
};

export const getHabits = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const habits = await habitSchema.find();
    res.send(habits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const deleteHabit = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id = req.params.id;
    await habitSchema.findByIdAndDelete(id);
    res.status(200).json({ message: 'Habit deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updateHabit = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id = req.params.id;
    const updatedHabit = req.params;
    await habitSchema.findByIdAndUpdate(id, updatedHabit);
    res.status(200).json({ message: 'Habit updated' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
