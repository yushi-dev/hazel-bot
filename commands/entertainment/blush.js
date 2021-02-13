const Discord = require("discord.js");
const Util = require("../../util/Util");

const { blush } = require("../../assets/json/images.json");

module.exports = {
    name: "blush",
    aliases: ["shy"],
    run({ msg, args }) {
        const mentions = msg.mentions.users.first(5);

        const embed = new Discord.MessageEmbed()
            .setColor("#c58c7d")
            .setImage(Util.getRandomArrayElement(blush));

        const description = (!args.length || msg.mentions.has(msg.author)) ?
            `eek, ${msg.author} has blushed-` :
            `aw, ${msg.author} has blushed towards ${mentions.join(", ")}`;

        embed.setDescription(description);

        msg.channel.send(embed);
    },
};


