const fs = require('fs');
const mod = require('pdf-parse');
const pdf = mod.default || mod;

let dataBuffer = fs.readFileSync('Miraz_Hossain_CV (1).pdf');
if (typeof pdf !== 'function') {
  console.log('Exported module keys:', Object.keys(mod));
  process.exit(1);
}

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('cv_text.txt', data.text);
    console.log("Extraction complete.");
}).catch(err => {
    console.error("Error reading PDF:", err);
});
