const {
  AddProject,
  GetProjects,
  GetProjectDetails,
  UpdateProject,
  DeleteProject,
} = require("../Controllers/ProjectController");

const ProjectRoutes = (app) => {
  app.post("/project/add-project", AddProject);
  app.get("/project/allprojects", GetProjects);
  app.get("/project/project/:id", GetProjectDetails);
  app.put("/project/update-project/:id", UpdateProject);
  app.delete("/project/delete-project/:id", DeleteProject);
};
module.exports = ProjectRoutes;
