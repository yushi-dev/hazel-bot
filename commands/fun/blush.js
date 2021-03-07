const Discord = require("discord.js");
const Util = require("../../util/functions");
const Config = require("../../config.json");

module.exports.info = {
    name: "blush",
    aliases: ["shy"],
    description: "preform a blush",
    usage: "<mention+?>",
};

module.exports.run = ({ msg, args }) => {
    const mentions = msg.mentions.users.first(5);

    const embed = new Discord.MessageEmbed()
        .setColor(Config.color)
        .setImage(Util.getRandomArrayElement(Config.images.blush));

    embed.setDescription(
        !args.length || msg.mentions.has(msg.author)
            ? `eek, ${msg.author} has blushed-`
            : `aw, ${msg.author} has blushed towards ${mentions.join(", ")}`
    );

    msg.channel.send(embed);
};
