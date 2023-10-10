import React, { useState } from "react";

const Course = () => {
  const [course, setCourse] = useState({
    university: "",
    institute: "",
    department: "",
    courseName: "",
    courseCode: "",
    semester: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create course.");
      }

      const data = await response.json();
      console.log("Course created:", data);
    } catch (error) {
      console.error("Error creating course:", error.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Course</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>University:</label>
          <input
            type="text"
            name="university"
            value={course.university}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Institute:</label>
          <input
            type="text"
            name="institute"
            value={course.institute}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={course.department}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Course Name:</label>
          <input
            type="text"
            name="courseName"
            value={course.courseName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Course Code:</label>
          <input
            type="text"
            name="courseCode"
            value={course.courseCode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Semester:</label>
          <input
            type="text"
            name="semester"
            value={course.semester}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Course;
