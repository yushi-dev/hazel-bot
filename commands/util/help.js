const path = require("path");
const Util = require("../../util/functions");
const Config = require("../../assets/json/config.json");
const Discord = require(`discord.js`);
const fs = require("fs");

module.exports.info = {
    name: "help",
    description: "provides command info",
    aliases: ["info", "commands"],
};

module.exports.run = ({ client, msg, args, prefix }) => {
    const embed = new Discord.MessageEmbed()
        .setColor(Config.color)
        .setFooter(`need more help? contact yushi ^^`);

    if (!args.length) {
        const collected_commands = fs
            .readdirSync("./commands")
            .map((catagory) => {
                let command_names = Util.getCommands(
                    `./commands/${catagory}`
                ).map((file) => path.parse(file).name);

                return {
                    name: catagory,
                    value: command_names.join(", "),
                    inline: true,
                };
            });

        embed
            .setTitle("hazel's support")
            .setDescription("here's a list of every command available!")
            .addField("usage", `\`${prefix}command\``)
            .addFields(...collected_commands);
    } else {
        const command = client.commands.get(
            client.aliases.get(args[0]) || args[0]
        );

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
                    "this command doesn't have any description set"
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
    }

    msg.channel.send(embed);
};
