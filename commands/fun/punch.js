const Discord = require("discord.js");
const Util = require("../../util/functions");
const Config = require("../../config.json");

module.exports.info = {
    name: "punch",
    description: "preforms a punch",
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
        .setImage(Util.getRandomArrayElement(Config.images.punch));

    embed.setDescription(
        msg.mentions.has(msg.author)
            ? `you're such a masochist ${msg.author}`
            : `ouch, ${msg.author} has punched ${mentions.join(", ")}`
    );

    msg.channel.send(embed);
};
