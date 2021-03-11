const Discord = require("discord.js");
const Util = require("../../util/functions");
const Config = require("../../config.json");

module.exports.info = {
    name: "headpat",
    usage: "<mention+>",
    description: "preforms a headpat",
};

module.exports.run = ({ msg }) => {
    const mentions = msg.mentions.users.first(5);

    if (!mentions.length) {
        msg.channel.send(
            Util.getRandomArrayElement(Config.replies.error.mention)
        );

        return;
    }

    const embed = new Discord.MessageEmbed()
        .setColor(Config.color)
        .setImage(Util.getRandomArrayElement(Config.images.headpat));

    embed.setDescription(
        msg.mentions.has(msg.author)
            ? `aw, here's a pat! ${msg.author}`
            : `aw, ${msg.author} has patted ${mentions.join(", ")}`
    );

    msg.channel.send(embed);
};
