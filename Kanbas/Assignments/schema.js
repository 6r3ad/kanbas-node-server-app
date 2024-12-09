import mongoose from "mongoose"
const assignmentSchema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        course: String,
        available: String,
        due: String,
        points: Number,
        description: String,
        due_date: Date,
        available_date: Date,
        until_Date: Date,
    },
    { collection: assignments }
);
export default assignmentSchema;