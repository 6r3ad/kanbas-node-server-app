import Database from "../Database/index.js";
import model from "./model.js";

export function findAllAssignments() {
    return model.find();
    // return Database.assignments;
} 

export function findAllCourseAssignments(courseId) {
    return model.find({ course: courseId });
    // const { assignments } = Database;
    // const courseAssignments = assignments.filter((a) => a.course === courseId);
    // return courseAssignments;
}

export function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
    // const { assignments } = Database;
    // Database.assignments = assignments.filter((a) => a._id !== assignmentId);
}

export function createAssignment(assignment) {
    delete assignment._id;
    return model.create( assignment );
    // const newAssignment = {...assignment, _id: assignment._id};
    // Database.assignments = [...Database.assignments, newAssignment ];
    // return newAssignment;
}
export function updateAssignment(assignmentId, assignmentUpdate) {
    return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdate });
    // const { assignments } = Database;
    // const assignment = assignments.find((a) => a._id === assignmentId);
    // Object.assign(assignment, assignmentUpdate);
    // return assignment;
}

