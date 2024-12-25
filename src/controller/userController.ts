import usersSchema from '../model/usersSchema';
import express from 'express';

export const allUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await usersSchema.find();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const addUser = async (req: express.Request, res: express.Response) => {
  try {
    const createUsers = new usersSchema(req.body);
    await createUsers.save();
    res.status(200).json({ message: 'Create a new user with the data ' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const userById = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    const user = await usersSchema.findById(id);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updateEmail = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id = req.params.id;
    const updateUser = await usersSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(updateUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
