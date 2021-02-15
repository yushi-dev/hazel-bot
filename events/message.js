const prefix = process.env.PREFIX;

module.exports = (client) => {
    client.on("message", (msg) => {
        if (!msg.content.startsWith(prefix) || msg.channel.type === "dm" || msg.author.bot) {
            return;
        };

        const args = msg.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if (client.commands.get(command) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(command))) {
            command.run({ client, msg, args });
        };
    });
};
