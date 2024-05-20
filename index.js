// global.setTimeout(() => {
//     console.log("Hello");
// }, 3000);

let interval = global.setInterval(() => {
    console.log("Hello World");
}, 1000);

global.setTimeout(() => {
    clearInterval(interval)
}, 3000);

console.log(__dirname);
console.log(__filename);