const { createPersonalInfo, GetAllInfo, GetInfobyId, UpdatePersonalInfo, DeletePersonalInfo } = require("../Controllers/PersonalInfoController");

const PersonalInfoRoutes = (app) => {
    app.post("/add/personalinfo", createPersonalInfo);
    app.get("/allInfos", GetAllInfo);
    app.get("/Info/:id", GetInfobyId);
    app.put("/Info/update-info/:id", UpdatePersonalInfo);
    app.delete("/Info/delete-Info/:id", DeletePersonalInfo);
};

module.exports = PersonalInfoRoutes;
