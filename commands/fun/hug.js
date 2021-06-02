const Discord = require("discord.js");
const Util = require("../../util/functions");

exports.info = {
    name: "hug",
    aliases: ["cuddle", "snuggle"],
    description: "preforms a hug",
    usage: "<mention+>",
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
                "https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif",
                "https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
                "https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif",
                "https://media.giphy.com/media/143v0Z4767T15e/giphy.gif",
                "https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
                "https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif",
                "https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif",
                "https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif",
                "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
                "https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif",
                "https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif",
                "https://media.giphy.com/media/vVA8U5NnXpMXK/giphy.gif",
            ])
        );

    embed.setDescription(
        msg.mentions.has(msg.author)
            ? `aw, here's a hug! ${msg.author}`
            : `aw, ${msg.author} has hugged ${mentions.join(", ")}`
    );

    msg.channel.send(embed);
};
