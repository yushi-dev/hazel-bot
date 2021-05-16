const Util = require("../../util/functions");

module.exports.info = {
    name: "8ball",
    description: "replies to a polar question",
};

module.exports.run = ({ msg }) => {
    if (!msg.length) {
        return;
    }

    if (!msg.endsWith("?")) {
        msg.channel.send("that is not a question...");

        return;
    }

    msg.channel.send(
        Util.getRandomArrayElement([
            "yes i agree",
            "that's false",
            "maybe",
            "idk",
            "not sure",
            "unresolved",
            "definitely",
            "not answering",
            "ur weird for asking that...",
            "ask again :)",
            "without a doubt",
            "very likely",
            "ofc",
        ])
    );
};
