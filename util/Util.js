module.exports = class {
    static getRandomArrayElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
};
