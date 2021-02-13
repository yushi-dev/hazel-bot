module.exports = class {
    static getRandomArrayItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
};
