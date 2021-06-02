const Util = require("../../util/functions");

exports.info = {
    name: "echo",
    aliases: ["say"],
    description: "repeats a given message",
};

exports.run = ({ msg, args }) => {
    msg.channel.send(
        args.join(" ") ||
            Util.getRandomArrayElement([
                "umm aren't i supposed to echo something?",
                "i need something to echo smh",
                "trying to get someone's attention? hehe",
                "echoo, echooo?",
            ])
    );
};
