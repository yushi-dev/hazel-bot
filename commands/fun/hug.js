const Discord = require("discord.js");
const Util = require("../../util/functions");
const Config = require("../../assets/json/config.json");

module.exports.info = {
    name: "hug",
    aliases: ["cuddle", "snuggle"],
};

module.exports.run = ({ msg }) => {
    const mentions = msg.mentions.users.first(5);

    if (!mentions.length) {
        const random_reply = Util.getRandomArrayElement(Config.replies.error.mention);

        msg.channel.send(random_reply);

        return;
    };

    const embed = new Discord.MessageEmbed()
        .setColor(Config.color)
        .setImage(Util.getRandomArrayElement(Config.images.hugs));

    const description = msg.mentions.has(msg.author) ?
        `aw, here's a hug! ${msg.author}` :
        `aw, ${msg.author} has hugged ${mentions.join(", ")}`;

    embed.setDescription(description);

    msg.channel.send(embed);
};