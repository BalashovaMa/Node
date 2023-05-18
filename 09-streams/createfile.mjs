import fs from 'fs';
import path from 'path';

//How to run programm node createfile.mjs <filename> <linesQty>
if (!process.argv[2] || !process.argv[3]) {
    console.log('Filename and lines qty must be supplied as argument');
    process.exit(0);
}

const fileName = process.argv[2];
const lineQty = parseInt(process.argv[3]);

if (isNaN(lineQty)) {
    console.log('Lines qty must be a number');
    process.exit(0);
}

const writeStream = fs.createWriteStream(path.join('./files', fileName));

for (let i = 1; i <= lineQty; i++) {
    writeStream.write(`This is a line number ${i} in the automatically generated file\n`);
}

writeStream.end(() => {
    console.log(`Automativally generated file ${fileName} was created`);
})
