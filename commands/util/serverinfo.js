const Discord = require("discord.js");
const moment = require("moment");

exports.info = {
    name: "serverinfo",
};

exports.run = ({ msg }) => {
    msg.channel.send(
        new Discord.MessageEmbed()
            .setColor("#c79e82")
            .setTitle(msg.guild.name)
            .setDescription(`our server owner is ${msg.guild.owner.user}!`)
            .setThumbnail(msg.guild.iconURL())
            .addFields(
                { name: "members", value: msg.guild.memberCount },
                {
                    name: "created at",
                    value: moment(msg.guild.createdAt)
                        .format("MMMM d, yyyy")
                        .toLowerCase(),
                    inline: true,
                },
                {
                    name: "joined at",
                    value: moment(msg.guild.member(msg.author).joinedAt)
                        .format("MMMM d, yyyy")
                        .toLowerCase(),
                    inline: true,
                }
            )
    );
};
