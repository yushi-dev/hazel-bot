exports.getRandomArrayElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

exports.getCommands = (dir) => {
    const glob = require("glob");
    return glob.sync(`${dir}/**/*.js`);
};
