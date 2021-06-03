const path = require("path");
const fs = require("fs");
const Util = require("../../util/functions");
const Discord = require(`discord.js`);

exports.info = {
    name: "help",
    description: "provides command info",
    aliases: ["info", "commands"],
};

exports.run = ({ client, msg, args, prefix }) => {
    const embed = new Discord.MessageEmbed()
        .setColor("#c79e82")
        .setFooter("need more help? contact yushi");

    if (!args.length) {
        embed
            .setTitle("hazel's support")
            .setDescription("here's a list of every command available!")
            .addField("usage", `\`${prefix}command-name\``)
            .addFields(
                ...fs.readdirSync("./commands").map((catagory) => {
                    return {
                        name: catagory,
                        value: Util.getCommands(`./commands/${catagory}`)
                            .map((file) => path.parse(file).name)
                            .join(", "),
                        inline: true,
                    };
                })
            );

        msg.channel.send(embed);

        return;
    }

    const command = client.commands.get(client.aliases.get(args[0]) || args[0]);

    embed
        .setTitle(command.info.name)
        .setDescription(
            command.info.description ||
                "this command doesn't have a description set"
        )
        .addFields(
            {
                name: "usage",
                value: `\`${
                    prefix +
                    command.info.name +
                    (command.info.usage ? ` ${command.info.usage}` : "")
                }\``,
            },
            {
                name: "aliases",
                value: command.info.aliases
                    ? command.info.aliases.join(", ")
                    : "no aliases set",
                inline: true,
            },
            {
                name: "permissions",
                value: command.info.permissions
                    ? command.info.permissions
                          .join(", ")
                          .replace(/_/g, " ")
                          .toLowerCase()
                    : "none",
                inline: true,
            }
        );

    msg.channel.send(embed);
};
