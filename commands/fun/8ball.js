const Util = require("../../util/functions");

exports.info = {
    name: "8ball",
    description: "replies to a polar question",
};

exports.run = ({ msg, args }) => {
    if (!args.length) {
        return;
    }

    if (
        Util.startsWithUsingArray(args[0].toLowerCase(), [
            "can",
            "will",
            "is",
            "are",
            "am",
            "do",
            "how",
            "does",
            "would",
            "may",
            "might",
            "should",
        ]) &&
        args[args.length - 1].endsWith("?") &&
        args.length > 2
    ) {
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
    } else {
        msg.channel.send("that's not a question :(");
    }
};
