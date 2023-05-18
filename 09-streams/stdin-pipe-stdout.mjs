import { Transform } from 'stream';
import fs from 'fs';

const filePath = './files/stdin-dump.txt';

/* //Pipe to file
const writeStream = fs.createWriteStream(filePath);
process.stdin.pipe(writeStream);

//pipe to stdout
process.stdin.pipe(process.stdout); */

const upperCaseStream = new Transform({
    transform: function (chunk, encoding, cb) {
        const upperCased = chunk.toString().toUpperCase();

        cb(null, upperCased);
    }
});

const reverseStream = new Transform({
    transform: function (chunk, encoding, cb) {
        const reversed = chunk.toString().split('').reverse().join('');

        cb(null, reversed);
    }
});

process.stdin
    .pipe(upperCaseStream)
    .pipe(reverseStream)
    .pipe(process.stdout);
