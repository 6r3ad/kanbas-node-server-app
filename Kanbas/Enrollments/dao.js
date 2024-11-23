import Database from "../Database/index.js";
export function isEnrolled(userId, courseId) {
    const { enrollments } = Database;
    return enrollments.some((course) => course.course === courseId && userId === course.user);
}
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments.push({ _id: enrollments.length + 1, user: userId, course: courseId });
}
export function unenrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter((e) => e.course === courseId && e.user === userId);
    return enrollments;
}
export function getEnrollments(userId) {
    const { enrollments } = Database;
    const enrollmentsForThisUser = enrollments.filter((course) => course.user === userId);
    return enrollmentsForThisUser;
}

