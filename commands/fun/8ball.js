const Util = require("../../util/functions");

module.exports.info = {
    name: "8ball",
    description: "replies to a polar question",
};

module.exports.run = ({ msg }) => {
    msg.channel.send(
        Util.getRandomArrayElement([
            "yes i agree",
            "that's false",
            "maybe",
            "idk",
            "not sure",
            "unresolved",
            "definitly",
            "not answering",
            "ur weird for asking that...",
            "ask again :)",
        ])
    );
};
