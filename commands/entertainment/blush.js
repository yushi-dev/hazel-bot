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

        if (!args.length || msg.mentions.has(msg.author)) {
            embed.setDescription(`eek, ${msg.author} has blushed-`);
        } else {
            embed.setDescription(`aw, ${msg.author} has blushed towards ${mentions.join(", ")}`);
        }

        msg.channel.send(embed);
    },
};


