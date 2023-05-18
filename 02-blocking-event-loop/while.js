let isRunning = true;

setTimeout(() => isRunning = false, 10);
proccess.nextTick(() => console.log('Next tick'));

while (isRunning) {
    console.log('While loop is running...');
}

