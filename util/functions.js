const glob = require("glob");

module.exports = class {
    static getRandomArrayElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    static getFiles(dir, ext) {
        return glob.sync(`${dir}/**/*${ext}`);
    }
};
