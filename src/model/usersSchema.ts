import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    maxLength: 100,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create and export the model
export default mongoose.model('user', UserSchema);
