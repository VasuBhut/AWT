const fs = require("fs");

function readFileAsync(filename, callback) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
}

function displayFileContents(err, data) {
  if (err) {
    console.error("Error reading the file:", err.message);
  } else {
    console.log("File contents:");
    console.log(data);
  }
}

const filename = "example.txt";

console.log(`Reading file: ${filename}`);
readFileAsync(filename, displayFileContents);
console.log("Reading file process initiated...");
