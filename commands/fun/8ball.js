const Util = require("../../util/functions");

exports.info = {
    name: "8ball",
    description: "replies to a polar question",
};

exports.run = ({ msg, args }) => {
    if (!args.length) {
        return;
    }

    msg.channel.send(
        Util.getRandomArrayElement([
            "yes i agree",
            "that's false",
            "maybe",
            "idk",
            "not sure",
            "idc",
            "definitely",
            "not answering",
            "ur weird for asking that...",
            "ask again :)",
            "without a doubt",
            "very likely",
            "ofc",
            "why're u asking that... pervert",
            "u ask too many questions",
        ])
    );
};
