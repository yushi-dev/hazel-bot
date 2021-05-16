const Discord = require("discord.js");
const Util = require("../../util/functions");

module.exports.info = {
    name: "blush",
    aliases: ["shy"],
    description: "preform a blush",
    usage: "<mention+?>",
};

module.exports.run = ({ msg, args }) => {
    const mentions = msg.mentions.users.first(5);

    const embed = new Discord.MessageEmbed()
        .setColor("#c79e82")
        .setImage(
            Util.getRandomArrayElement([
                "https://media.giphy.com/media/ulWUgCk4F1GGA/giphy.gif",
                "https://media.giphy.com/media/klmpEcFgXzrYQ/giphy.gif",
                "https://media.giphy.com/media/6CBGoJnEBbEWs/giphy.gif",
                "https://media.giphy.com/media/T3Vvyi6SHJtXW/giphy.gif",
                "https://media.giphy.com/media/UUjkoeNhnn0K4/giphy.gif",
                "https://media.giphy.com/media/dzVN9d0k1Xn0TYsBuO/giphy.gif",
                "https://media.giphy.com/media/l3mAFwOEPLzoafdA5B/giphy.gif",
                "https://media.giphy.com/media/dkvGrfQ6ryIAU/giphy.gif",
                "https://media.giphy.com/media/cxRGi2nJb3cBy/giphy.gif",
                "https://media.giphy.com/media/FjMfcItWjr3DG/giphy.gif",
                "https://media.giphy.com/media/4orREzKni7BTi/giphy.gif",
                "https://media.giphy.com/media/1gbQIeNzZxcSk/giphy.gif",
            ])
        );

    embed.setDescription(
        !args.length || msg.mentions.has(msg.author)
            ? `eek, ${msg.author} has blushed-`
            : `aw, ${msg.author} has blushed towards ${mentions.join(", ")}`
    );

    msg.channel.send(embed);
};
