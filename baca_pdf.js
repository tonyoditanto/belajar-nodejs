// baca_pdf.js
const fs = require("fs");
const pdf = require("pdf-extraction");
 
let dataBuffer = fs.readFileSync("./tony.pdf");
 
pdf(dataBuffer).then(function (data) {
    console.log(data.text);
});