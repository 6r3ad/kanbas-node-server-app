import Database from "../Database/index.js";
import model from "./model.js";

export function isEnrolled(userId, courseId) {
    // const { enrollments } = Database;
    // return enrollments.some((course) => course.course === courseId && userId === course.user);
}

export function toggleEnroll(userId, courseId) {
    Database.enrollments = isEnrolled(userId, courseId) 
        ? Database.enrollments.filter((e) => e.course === courseId && e.user === userId)
        : Database.enrollments.push({ _id: Database.enrollments.length + 1, user: userId, course: courseId });
    const enrollmentsForThisUser = Database.enrollments.filter((course) => course.user === userId);
    return enrollmentsForThisUser;
}

export function getEnrollments(userId) {
    // const enrollmentsForThisUser = Database.enrollments.filter((course) => course.user === userId);
    // return enrollmentsForThisUser;
}

export function enrollUserInCourse(userId, courseId) {
    return model.create({ userId, courseId });
    // const { enrollments } = Database;
    // Database.enrollments.push({ _id: enrollments.length + 1, user: userId, course: courseId });
}

export function unenrollUserFromCourse(user, course) {
    return model.deleteOne({ user, course });
   }

export async function findCoursesForUser(userId) {
 const enrollments = await model.find({ user: userId }).populate("course");
 return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
 const enrollments = await model.find({ course: courseId }).populate("user");
 return enrollments.map((enrollment) => enrollment.user);
}

