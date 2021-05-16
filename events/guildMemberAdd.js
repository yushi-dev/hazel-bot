const Discord = require("discord.js");

module.exports.run = (member) => {
    member.guild.channels.cache
        .get("785928459980767293")
        .send(
            new Discord.MessageEmbed()
                .setColor("#c79e82")
                .setTitle(`welcome to ${member.guild.name}!`)
                .setDescription(
                    `${member.user} has entered ${member.guild.name}!`
                )
                .setImage("https://i.imgur.com/KYGge8u.jpg")
                .setFooter(
                    "if you have a question, please ask a moderator or admin"
                )
        );
};
