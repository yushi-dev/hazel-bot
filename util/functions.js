const glob = require("glob");

module.exports = class {
    static getRandomArrayElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    static getCommands(dir) {
        return glob.sync(`${dir}/**/*.js`);
    }
};
