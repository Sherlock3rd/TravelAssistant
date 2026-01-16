const fs = require('fs');
const path = require('path');

const dataJsPath = path.join(__dirname, 'public', 'data.js');
const content = fs.readFileSync(dataJsPath, 'utf8');

const newContent = `const fs = require('fs');
${content}

const dump = {
    questData: typeof questData !== 'undefined' ? questData : {},
    categoryFillData: typeof categoryFillData !== 'undefined' ? categoryFillData : {}
};

try {
    fs.writeFileSync("data_dump.json", JSON.stringify(dump, null, 2), "utf8");
    console.log("Successfully wrote data_dump.json");
} catch (e) {
    console.error("Error writing file:", e);
}
`;

const tempPath = path.join(__dirname, 'temp_dumper.js');
fs.writeFileSync(tempPath, newContent);
console.log('Created temp_dumper.js');
