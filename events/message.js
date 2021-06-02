const prefix = process.env.PREFIX;

module.exports.run = (msg, client) => {
    if (
        !msg.content.startsWith(prefix) ||
        msg.channel.type === "dm" ||
        msg.author.bot
    ) {
        return;
    }

    const args = msg.content.slice(prefix.length).split(/ +/);
    const command_name = args.shift().toLowerCase();

    const command =
        client.commands.get(command_name) ||
        client.commands.find(
            (cmd) => cmd.info.aliases && cmd.info.aliases.includes(command_name)
        );

    if (!command) return;

    if (!msg.member.hasPermission(command.info.permissions)) {
        msg.channel.send(
            "um, you have insufficient permissions to use this command"
        );

        return;
    }

    command.run({ client, msg, args, prefix });
};
