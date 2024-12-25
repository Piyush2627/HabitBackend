import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  frequency: { type: Number, required: true },
  duration: { type: Number },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  completed: { type: Number, default: 0 },
  deleted: { type: Boolean, default: false },
  deletedAt: { type: Date },
  lastCompletedAt: { type: Date },
  nextDueAt: { type: Date },
  lastUpdatedAt: { type: Date },
  lastCompletedDuration: { type: Number },
  updatedAt: { type: Date },
});

export default mongoose.model('Habit', habitSchema);
