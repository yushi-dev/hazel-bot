const Discord = require("discord.js");
const Util = require("../../util/functions");

module.exports = {
    name: "help",
    run({ msg, args }) {
        const mentions = msg.mentions.users.first(5);

        const embed = new Discord.MessageEmbed()
            .setColor("#c58c7d")
            .setImage(Util.getRandomArrayElement(blush));

        const desc = (!args.length || msg.mentions.has(msg.author)) ?
            `eek, ${msg.author} has blushed-` :
            `aw, ${msg.author} has blushed towards ${mentions.join(", ")}`;

        embed.setDescription(desc);

        msg.channel.send(embed);
    },
};


