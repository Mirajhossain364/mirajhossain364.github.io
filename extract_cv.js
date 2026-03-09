import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Miraz_Hossain_CV (1).pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('cv_text.txt', data.text);
    console.log("Extraction complete.");
}).catch(err => {
    console.error("Error reading PDF:", err);
});
