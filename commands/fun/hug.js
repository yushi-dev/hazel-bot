const Discord = require("discord.js");
const Util = require("../../util/functions");
const Config = require("../../assets/json/config.json");

module.exports.info = {
    name: "hug",
    aliases: ["cuddle", "snuggle"],
    description: "preforms a hug",
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
        .setImage(Util.getRandomArrayElement(Config.images.hugs));

    embed.setDescription(
        msg.mentions.has(msg.author)
            ? `aw, here's a hug! ${msg.author}`
            : `aw, ${msg.author} has hugged ${mentions.join(", ")}`
    );

    msg.channel.send(embed);
};
