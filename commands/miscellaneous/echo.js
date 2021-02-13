const Util = require("../../util/Util");

const { echo } = require("../../assets/json/replies.json");

module.exports = {
    name: "echo",
    aliases: ["say"],
    description: "repeats a given message",
    run({ msg, args }) {
        msg.channel.send(args.join(" ") || Util.getRandomArrayElement(echo));
    },
};
