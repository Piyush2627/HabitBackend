"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const habitSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    frequency: { type: Number, required: true },
    duration: { type: Number },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'user' },
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
exports.default = mongoose_1.default.model('Habit', habitSchema);
