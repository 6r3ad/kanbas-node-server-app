import Database from "../Database/index.js";
export function isEnrolled(userId, courseId) {
    const { enrollments } = Database;
    return enrollments.some((course) => course.course === courseId && userId === course.user);
}

export function toggleEnroll(userId, courseId) {
    Database.enrollments = isEnrolled(userId, courseId) 
        ? Database.enrollments.filter((e) => e.course === courseId && e.user === userId)
        : Database.enrollments.push({ _id: Database.enrollments.length + 1, user: userId, course: courseId });
    const enrollmentsForThisUser = Database.enrollments.filter((course) => course.user === userId);
    return enrollmentsForThisUser;
}

export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments.push({ _id: enrollments.length + 1, user: userId, course: courseId });
}

export function getEnrollments(userId) {
    const enrollmentsForThisUser = Database.enrollments.filter((course) => course.user === userId);
    return enrollmentsForThisUser;
}

