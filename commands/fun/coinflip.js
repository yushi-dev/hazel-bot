const Util = require("../../util/functions");

exports.info = {
    name: "coinflip",
};

exports.run = ({ msg }) => {
    msg.channel.send(Util.getRandomArrayElement(["heads", "tails"]));
};
