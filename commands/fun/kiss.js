const Discord = require("discord.js");
const Util = require("../../util/functions");

const { kiss } = require("../../assets/json/images.json");
const { error } = require("../../assets/json/replies.json");

module.exports = {
    name: "kiss",
    aliases: ["cuddle", "snuggle"],
    run({ msg }) {
        const mentions = msg.mentions.users.first(5);

        if (!mentions.length) {
            msg.channel.send(Util.getRandomArrayElement(error.mention));

            return;
        };

        const embed = new Discord.MessageEmbed()
            .setColor("#c58c7d")
            .setImage(Util.getRandomArrayElement(kiss));

        const description = msg.mentions.has(msg.author) ?
            `um, ${msg.author} has kissed themselves?` :
            `woah, ${msg.author} has kissed ${mentions.join(", ")}`;

        embed.setDescription(description);

        msg.channel.send(embed);
    },
};

