const info = (text) => {
    console.log(text, performance.now().toFixed(2));
}

info('Programm start');

setTimeout(() => info('Timeout'), 0);

/* function fib(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    let fib1 = 0;
    let fib2 = 1;
    let sum;
    for (let i = 1; i < n; i++) {
        sum = fib1 + fib2;
        fib1 = fib2;
        fib2 = sum;
    }
    return sum;
}

console.log(fib(10)); */



function fib(n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    console.log(arr[arr.length - 1]);
}
fib(1000);

info('Programm end');