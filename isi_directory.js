// isi_directory.js
const dirPath = './';
const fs = require('fs');

fs.readdir(dirPath, function (err, files) {
    if (err) throw err;
    files.forEach(file => {
    console.log(file);
  });
});