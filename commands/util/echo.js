const Util = require("../../util/functions");
const Config = require("../../assets/json/config.json");

module.exports.info = {
    name: "echo",
    aliases: ["say"],
    description: "repeats a given message",
};

module.exports.run = ({ msg, args }) => {
    const random_reply = Util.getRandomArrayElement(Config.replies.echo);

    msg.channel.send(args.join(" ") || random_reply);
};
