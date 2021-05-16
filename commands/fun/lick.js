const Discord = require("discord.js");
const Util = require("../../util/functions");

module.exports.info = {
    name: "lick",
    description: "preforms a lick",
    usage: "<mention+>",
};

module.exports.run = ({ msg }) => {
    const mentions = msg.mentions.users.first(5);

    if (!mentions.length) {
        msg.channel.send(
            Util.getRandomArrayElement([
                "u must mention someone :)",
                "umm there's no one being mentioned...",
            ])
        );

        return;
    }

    const embed = new Discord.MessageEmbed()
        .setColor("#c58c7d")
        .setImage(
            Util.getRandomArrayElement([
                "https://media.giphy.com/media/ZeLFBjnBz9MTsrmBop/giphy.gif",
                "https://media.giphy.com/media/l4dUubfeVZt6IPpr6o/giphy.gif",
                "https://media.giphy.com/media/J2Zpx29eNS92MwdN2q/giphy.gif",
                "https://media.giphy.com/media/UukSM9g8HDsQ3YEXFT/giphy.gif",
                "https://media.giphy.com/media/S9iGv9qQlCp7FBcnaS/giphy.gif",
                "https://media.giphy.com/media/LS2eLS2JS4hT3enAUl/giphy.gif",
                "https://media.giphy.com/media/kH0viRnUpZBrd67ZUK/giphy.gif",
                "https://media.giphy.com/media/iGos5bfdqi5AdEtdhz/giphy.gif",
                "https://media.giphy.com/media/Qz5s7o5V42jY3ZUsZx/giphy.gif",
                "https://media.giphy.com/media/JtGJki2TmZiqQXBLDQ/giphy.gif",
                "https://media.giphy.com/media/H6cBQfmwqrhDG7nyvV/giphy.gif",
            ])
        );

    embed.setDescription(
        msg.mentions.has(msg.author)
            ? `um, are you a cat? ${msg.author}`
            : `meow, ${msg.author} has licked ${mentions.join(", ")}`
    );

    msg.channel.send(embed);
};
