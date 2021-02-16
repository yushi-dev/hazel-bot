const prefix = process.env.PREFIX;

module.exports = (client) => {
    client.on("message", (msg) => {
        if (!msg.content.startsWith(prefix) || msg.channel.type === "dm" || msg.author.bot) return;

        const args = msg.content.slice(prefix.length).split(/ +/);
        const cmd = args.shift().toLowerCase();

        const command = client.commands.get(cmd) || client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

        if (!msg.author.hasPermission(command.permissions)) {
            msg.channel.send(`you don't have the permissions to execute this command, permissions needed: ${command.permissions}`);

            return;
        }

        if (command) {
            command.run({ client, msg, args });
        };
    });
};
