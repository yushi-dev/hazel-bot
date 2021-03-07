const Util = require("../../util/functions");
const Config = require("../../config.json");

module.exports.info = {
    name: "echo",
    aliases: ["say"],
    description: "repeats a given message",
};

module.exports.run = ({ msg, args }) => {
    msg.channel.send(
        args.join(" ") || Util.getRandomArrayElement(Config.replies.echo)
    );
};
