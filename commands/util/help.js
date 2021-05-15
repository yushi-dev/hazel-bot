const path = require("path");
const fs = require("fs");
const Util = require("../../util/functions");
const Config = require("../../config.json");
const Discord = require(`discord.js`);

module.exports.info = {
    name: "help",
    description: "provides command info",
    aliases: ["info", "commands"],
};

module.exports.run = ({ client, msg, args, prefix }) => {
    const embed = new Discord.MessageEmbed()
        .setColor(Config.color)
        .setFooter(`need more help? contact yushi`);

    if (!args.length) {
        embed
            .setTitle("hazel's support")
            .setDescription("here's a list of every command available!")
            .addField("usage", `\`${prefix}command-name\``)
            .addFields(
                ...fs.readdirSync("./commands").map((sub) => {
                    return {
                        name: sub,
                        value: Util.getCommands(`./commands/${sub}`)
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

    if (!command) {
        msg.channel.send(
            `that's not in my database! please use \`${prefix}help\``
        );

        return;
    }

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
                value: command.info.aliases.join(", ") || "no aliases set",
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
