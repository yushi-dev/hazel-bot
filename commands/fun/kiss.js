const Discord = require("discord.js");
const Util = require("../../util/functions");

module.exports.info = {
    name: "kiss",
    aliases: ["smooch", "peck"],
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
                "https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif",
                "https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif",
                "https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif",
                "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
                "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",
                "https://media.giphy.com/media/11rWoZNpAKw8w/giphy.gif",
                "https://media.giphy.com/media/w62BhkdkxaCwE/giphy.gif",
                "https://media.giphy.com/media/hogpNuO4rveGca2wkZ/giphy.gif",
                "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
                "https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif",
                "https://media.giphy.com/media/Quhl2AS7lC7MoHrSYk/giphy.gif",
            ])
        );

    embed.setDescription(
        msg.mentions.has(msg.author)
            ? `um, ${msg.author} has kissed themselves?`
            : `woah, ${msg.author} has kissed ${mentions.join(", ")}`
    );

    msg.channel.send(embed);
};
