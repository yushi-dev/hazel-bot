const Util = require("../../util/functions");

module.exports.info = {
    name: "8ball",
    description: "replies to a polar question",
};

module.exports.run = ({ msg, args }) => {
    if (!args.length) {
        return;
    }

    if (
        Util.StartsWithUsingArray(args[0].toLowerCase(), [
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
    } else {
        msg.channel.send("that's not a question :(");
    }
};
