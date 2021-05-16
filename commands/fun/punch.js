const Discord = require("discord.js");
const Util = require("../../util/functions");

module.exports.info = {
    name: "punch",
    description: "preforms a punch",
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
        .setColor("#c79e82")
        .setImage(
            Util.getRandomArrayElement([
                "https://media.giphy.com/media/dLFdh0a92fhxoTgZVf/giphy.gif",
                "https://media.giphy.com/media/vtjMER18uH2bX4VUHq/giphy.gif",
                "https://media.giphy.com/media/xVMLgxUrQR1inwGpem/giphy.gif",
            ])
        );

    embed.setDescription(
        msg.mentions.has(msg.author)
            ? `you're such a masochist ${msg.author}`
            : `ouch, ${msg.author} has punched ${mentions.join(", ")}`
    );

    msg.channel.send(embed);
};
