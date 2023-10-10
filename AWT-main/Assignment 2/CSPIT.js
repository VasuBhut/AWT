// CSPIT Object
let CSPIT = {
  location: "Changa",
  eshtablishment_year: 2000,
  departments: ["CE", "IT", "CSE", "ME", "CL", "EC", "EE"],
  getInfo: function getValues() {
    // forin loop to access the properties of object.
    console.log("\n\nCSPIT");
    for (let prop in CSPIT) {
      console.log(prop, "   ->    ", CSPIT[prop]);
    }
  },
};

// prototype of CSPIT object
let CE_Dept = Object.create(CSPIT);
CE_Dept.Total_Student = 250;
CE_Dept.Total_Faculties = 30;

CE_Dept.getInfo = function getValues() {
  console.log("\n\nCE Department");
  for (let prop in CE_Dept) {
    console.log(prop, "   ->    ", CE_Dept[prop]);
  }
};

// function calling
CSPIT.getInfo();
CE_Dept.getInfo();

// accessing array using forof loop
console.log("\n\nDepartments in CSPIT :");
for (let dept of CSPIT.departments) {
  console.log(dept);
}