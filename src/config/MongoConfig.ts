import mongoose from 'mongoose';

const ConnectDB = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.CONNECTION_STRING}`, {
      dbName: 'sample_mflix',
    });

    console.log(
      'Database connection established :',
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {}
};

export default ConnectDB;
