const prefix = process.env.PREFIX;

module.exports = (client) => {
    client.on("message", (msg) => {
        if (!msg.content.startsWith(prefix)) return;

        if (msg.channel.type === "dm" || msg.author.bot) return;

        const args = msg.content.slice(prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command =
            client.commands.get(commandName) ||
            client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return;

        command.run({ client, msg, args: args.slice(1) });
    });
};
