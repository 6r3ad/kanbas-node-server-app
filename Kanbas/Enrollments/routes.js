import * as dao from "./dao.js";
export default function EnrollRoutes(app) {
    app.get("/api/enroll/:userId", (req, res) => {
        const { userId } = req.params;
        const courses = dao.getEnrollments(userId);
        res.send(courses);
    });

    app.get("/api/enroll/:userId/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        const isEnrolled = dao.isEnrolled(userId, courseId);
        res.send(isEnrolled);
    })

    app.put("/api/enroll/toggleEnroll/:userId/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        const courses = dao.toggleEnroll(userId, courseId);
        return res.status(200).json(courses);
    });
}