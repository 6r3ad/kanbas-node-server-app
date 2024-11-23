import Database from "../Database/index.js";
export function findAllAssignments() {
    return Database.assignments;
} 

export function findAllCourseAssignments(courseId) {
    const { assignments } = Database;
    const courseAssignments = assignments.filter((a) => { a.course === courseId});
    return courseAssignments;
}

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((a) => { a._id !== assignmentId});
}

export function createAssignment(assignment) {
    const newAssignment = {...assignment, _id: assignment._id};
    Database.assignments = [...Database.assignments, newAssignment ];
    return newAssignment;
}
export function updateAssignment(assignmentId, assignmentUpdate) {
    const { assignments } = Database;
    const assignment = assignments.find((a) => a._id === assignmentId);
    Object.assign(assignment, courseUpdates);
    return assignment;
}

