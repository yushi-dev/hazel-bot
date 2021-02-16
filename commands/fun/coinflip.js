const Util = require("../../util/functions");

module.exports = {
    name: "coinflip",
    aliases: ["flip"],
    run({ msg }) {
        msg.channel.send(Util.getRandomArrayElement(["heads", "tails"]));
    }
};