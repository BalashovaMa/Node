import fs from 'fs';

const fileName = './files/fifth.txt';
const copyedFileName = './files/fifth-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(copyedFileName);

readStream.pipe(writeStream)

readStream.on('end', () => console.log('Read stream ended'));
writeStream.on('close', () => console.log('Write stream closed'));
writeStream.on('finish', () => console.log('File was copied'));