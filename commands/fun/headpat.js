const Discord = require("discord.js");
const Util = require("../../util/functions");

exports.info = {
    name: "headpat",
    aliases: ["pat"],
    usage: "<mention+>",
    description: "preforms a headpat",
};

exports.run = ({ msg }) => {
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
                "https://media.giphy.com/media/109ltuoSQT212w/giphy.gif",
                "https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif",
                "https://media.giphy.com/media/ARSp9T7wwxNcs/giphy.gif",
                "https://media.giphy.com/media/SWjOyVOcUECfdG7dQm/giphy.gif",
                "https://media.giphy.com/media/S6NIIbtNYOTtvgdwWC/giphy.gif",
                "https://media.giphy.com/media/QWRln9pNiBmJt1Krks/giphy.gif",
                "https://media.giphy.com/media/S5uT7KROKtGCON9w4c/giphy.gif",
                "https://media.giphy.com/media/S98oiYhUk7pa6RjC7C/giphy.gif",
                "https://media.giphy.com/media/eMtJldMsmIbQkcewyx/giphy.gif",
                "https://media.giphy.com/media/l1rejhOyfxSdzOgIfx/giphy.gif",
            ])
        );

    embed.setDescription(
        msg.mentions.has(msg.author)
            ? `aw, here's a pat! ${msg.author}`
            : `aw, ${msg.author} has patted ${mentions.join(", ")}`
    );

    msg.channel.send(embed);
};
