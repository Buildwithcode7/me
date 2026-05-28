// Crud.js

const fs = require('fs');

const filename = 'data.txt';

// CREATE / WRITE
fs.writeFileSync(filename, 'Hello, this is the initial text.\n');
console.log("File Created.");

// READ
let content = fs.readFileSync(filename, 'utf8');
console.log("Read Data:", content);

// UPDATE (APPEND)
fs.appendFileSync(filename, 'This is appended text.');
console.log("File Updated.");

// READ UPDATED DATA
let updata = fs.readFileSync(filename, 'utf8');
console.log("Updated Data:", updata);

// DELETE
fs.unlinkSync(filename);
console.log("File Deleted.");