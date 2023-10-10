const Project = require("../Models/Project");

exports.AddProject = async (req, res) => {
  try {
    const projectTags = req.body.project_tags; // Array of project tags
    const projectName = req.body.project_name; // Array of project tags
    const projectDetails = req.body.project_details; // Array of project tags
    const projectLinks = req.body.project_links; // Array of project links

    console.log(projectName, projectDetails, projectTags, projectLinks);
    const newProject = new Project({
      project_name: projectName,
      project_details: projectDetails,
      project_links: projectLinks,
      project_tags: projectTags,
    });
    const createdProject = await newProject.save();
    if (createdProject) {
      return res.status(200).json({
        success: true,
        Project: createdProject,
      });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
  }
};

exports.GetProjects = async (req, res) => {
  try {
    const projects = await Project.find(
      {},
      {
        _id: 1,
        project_name: 1,
        project_details: 1,
        project_links: 1,
        project_tags: 1,
      }
    );
    return res.status(200).send({ success: true, projects });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
  }
};

exports.GetProjectDetails = async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found." });
    }
    const responseData = {
      project_name: project.project_name,
      project_details: project.project_details,
      project_links: project.project_links,
      project_tags: project.project_tags,
    };
    res.status(200).json({
      success: true,
      data: responseData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
  }
};

exports.UpdateProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const { project_name, project_details, project_links, project_tags } =
      req.body;
    let project;
    project = await Project.findById(projectId);
    if (project_name !== project.project_name) {
      project.project_name = project_name;
    }
    if (project_details !== project.project_details) {
      project.project_details = project_details;
    }
    if (project_tags !== project.project_tags) {
      project.project_tags = project_tags;
    }
    if (project_links !== project.project_links) {
      project.project_links = project_links;
    }
    project.updatedAt = Date.now();
    const updatedProject = await project.save();
    // console.log(updatedProject);
    return res.status(200).json({ success: true, updatedProject });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
  }
};

exports.DeleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    if (!project) {
      console.log(1);
      return res
        .status(400)
        .json({ success: false, message: "Project not found" });
    }
    const deletedProject = await Project.findByIdAndDelete(projectId);
    return res
      .status(200)
      .json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
  }
};
