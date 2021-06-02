export function getRandomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function getCommands(dir) {
    const glob = require("glob");
    return glob.sync(`${dir}/**/*.js`);
}

export function StartsWithUsingArray(string, arr) {
    return arr.includes(string.split(" ")[0]);
}
