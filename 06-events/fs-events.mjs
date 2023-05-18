import { EventEmitter } from 'events';
import fs from 'fs';

const fileEmitter = new EventEmitter;
const filePath = './first.txt';

fileEmitter.on('appendComplete', () => {
    console.log('Appended text to the first.txt file')
    fs.rename(filePath, './renamed-first.txt', () => fileEmitter.emit('renameComplete'))

})

fileEmitter.on('renameComplete', () => console.log('File renamed'))

fileEmitter.on('writeComplete', () => {
    console.log('File first.txt was written');
    fs.appendFile(filePath, '\nOne more line', () => {
        fileEmitter.emit('appendComplete')
    })
})
fs.writeFile(filePath, 'First file text', () => {
    fileEmitter.emit('writeComplete');
});


