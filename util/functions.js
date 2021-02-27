const glob = require("glob");

module.exports = class {
    static getRandomArrayElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    static scanFolderForFiles(dir, ext) {
        return glob.sync(`${dir}/**/*${ext}`);
    }
};
