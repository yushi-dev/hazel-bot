const Discord = require("discord.js");
const Util = require("../../util/functions");

const { hugs } = require("../../assets/json/images.json");
const { error } = require("../../assets/json/replies.json");

module.exports = {
    name: "hug",
    aliases: ["cuddle", "snuggle"],
    run({ msg }) {
        const mentions = msg.mentions.users.first(5);

        if (!mentions.length) {
            msg.channel.send(Util.getRandomArrayElement(error.mention));

            return;
        };

        const embed = new Discord.MessageEmbed()
            .setColor("#c58c7d")
            .setImage(Util.getRandomArrayElement(hugs));

        const desc = msg.mentions.has(msg.author) ?
            `aw, here's a hug! ${msg.author}` :
            `aw, ${msg.author} has hugged ${mentions.join(", ")}`;

        embed.setDescription(desc);

        msg.channel.send(embed);
    },
};