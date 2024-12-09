import * as dao from "./dao.js";
export default function AssignRoutes(app) {

    app.get("/api/assignments", async (req, res) => {
       const assignments =  await dao.findAllAssignments();
       res.send(assignments);
    });

    app.put("/api/assignments/:aid", async (req, res) => {
        const { aid } = req.params;
        const updates = req.body;
        const status = await dao.updateAssignment(aid, updates);
        res.send(status);
    });

    app.post("/api/assignments", async (req, res) => { 
        const newAssignment = await dao.createAssignment(req.body);
        res.json(newAssignment);
    });

    app.delete("/api/assignments/:aid", async (req, res) => {
        const { aid } = req.params;
        const status = await dao.deleteAssignment(aid);
        res.send(status);
    });
}
