const Discord = require("discord.js");
const Util = require("../../util/Util");

const { hugs } = require("../../assets/json/images.json");

module.exports = {
    name: "hug",
    aliases: ["cuddle", "snuggle"],
    run({ msg }) {
        const mentions = msg.mentions.users.first(5);

        if (!mentions.length) {
            msg.channel.send("dummy, you must mention someone!");

            return;
        };

        const embed = new Discord.MessageEmbed()
            .setColor("#c58c7d")
            .setImage(Util.getRandomArrayItem(hugs));

        const desc = msg.mentions.has(msg.author) ?
            `aw, here's a hug! ${msg.author}` :
            `aw, ${msg.author} has hugged ${mentions.join(", ")}`;

        embed.setDescription(desc);

        msg.channel.send(embed);
    },
};

