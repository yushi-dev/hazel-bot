const Util = require("../../util/functions");

module.exports.info = {
    name: "coinflip",
    aliases: ["flip"],
};

module.exports.run = ({ msg }) => {
    const random_item = Util.getRandomArrayElement(["heads", "tails"]);

    msg.channel.send(random_item);
};