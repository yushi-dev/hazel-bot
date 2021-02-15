const prefix = process.env.PREFIX;

module.exports = (client) => {
    client.on("message", (msg) => {
        if (!msg.content.startsWith(prefix) || msg.channel.type === "dm" || msg.author.bot) {
            return;
        };

        const args = msg.content.slice(prefix.length).split(/ +/);
        const file = args.shift().toLowerCase();

        const command =
            client.commands.get(file) ||
            client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(file));

        if (command) {
            command.run({ client, msg, args });
        };
    });
};
