const Config = require("../../config.json");
const Discord = require("discord.js");
const moment = require("moment");

module.exports.info = {
    name: "serverinfo",
};

module.exports.run = ({ msg }) => {
    msg.channel.send(
        new Discord.MessageEmbed()
            .setColor(Config.color)
            .setTitle(msg.guild.name)
            .setDescription("information about the server!")
            .setThumbnail(msg.guild.iconURL())
            .addFields(
                { name: "owner", value: msg.guild.owner.user },
                { name: "members", value: msg.guild.memberCount },
                {
                    name: "created at",
                    value: moment(msg.guild.createdAt).format("dddd MM, yyyy"),
                    inline: true,
                },
                {
                    name: "joined at",
                    value: moment(msg.guild.member(msg.author).joinedAt).format(
                        "dddd MM, yyyy"
                    ),
                    inline: true,
                }
            )
    );
};
