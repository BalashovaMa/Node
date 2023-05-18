import { season, temperature } from "./named-exports.mjs";
import getData from "./default-export.mjs";
import { isRaining, humidity } from "./inline-export.mjs";
import DEFAULT_SERVER, { USERNAME, PASSWORD } from "./mix-exports.mjs";

console.log(season);
console.log(temperature);

console.log(humidity);
console.log(isRaining);


getData('https://jsonplaceholder.typicode.com/posts/1')
    .then((post) => console.log(post))
    .catch((err) => console.log(err));

console.log(DEFAULT_SERVER);
console.log(USERNAME);
console.log(PASSWORD);