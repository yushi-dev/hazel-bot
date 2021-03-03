const Util = require("../../util/functions");

module.exports.info = {
    name: "coinflip",
    aliases: ["flip"],
};

module.exports.run = ({ msg }) => {
    msg.channel.send(Util.getRandomArrayElement(["heads", "tails"]));
};
