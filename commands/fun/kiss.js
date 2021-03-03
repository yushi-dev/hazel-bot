const Discord = require("discord.js");
const Util = require("../../util/functions");
const Config = require("../../assets/json/config.json");

module.exports.info = {
    name: "kiss",
    aliases: ["smooch", "peck"],
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
        .setImage(Util.getRandomArrayElement(Config.images.kiss));

    embed.setDescription(
        msg.mentions.has(msg.author)
            ? `um, ${msg.author} has kissed themselves?`
            : `woah, ${msg.author} has kissed ${mentions.join(", ")}`
    );

    msg.channel.send(embed);
};
