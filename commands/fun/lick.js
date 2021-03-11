const Discord = require("discord.js");
const Util = require("../../util/functions");
const Config = require("../../config.json");

module.exports.info = {
    name: "lick",
    description: "preforms a lick",
    usage: "<mention+>",
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
        .setImage(Util.getRandomArrayElement(Config.images.lick));

    embed.setDescription(
        msg.mentions.has(msg.author)
            ? `um, are you a cat? ${msg.author}`
            : `meow, ${msg.author} has licked ${mentions.join(", ")}`
    );

    msg.channel.send(embed);
};
