import * as dao from "./dao.js";
export default function EnrollRoutes(app) {
    app.get("/api/enroll/:userId", (req, res) => {
        const { userId } = req.params;
        const courses = dao.getEnrollments(userId);
        res.send(courses);
    });

    app.put("/api/enroll/toggleEnroll/:userId/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        const courses = dao.enrollUserInCourse(userId, courseId);
        res.send(courses);
    });

    app.put("/api/enroll/toggleUnenroll/:userId/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        const courses = dao.unenrollUserInCourse(userId, courseId)
        res.send(courses);
    });
}