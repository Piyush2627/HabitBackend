import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
  title: { type: String },
  frequency: { type: Number },
  duration: { type: Number },
  description: { type: String },
  completed: { type: Number },
  completedDates: [
    {
      dates: { type: Date },
      isSkipped: { type: Boolean, default: false },
      status: { type: Boolean, default: false },
    },
  ],
});

export default mongoose.model('Habit', habitSchema);
