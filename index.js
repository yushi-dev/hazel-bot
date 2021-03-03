const Discord = require("discord.js");
const Util = require("./util/functions");

require("dotenv").config();

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

Util.getCommands("./commands").forEach((cmd) => {
    const command = require(cmd);

    client.commands.set(command.info.name, command);

    if (command.info.aliases) {
        command.info.aliases.forEach((i) => client.aliases.set(i, command));
    }
});

Util.getCommands("./events").forEach((file) => {
    const event = require(file);

    client[event.info.once ? "once" : "on"](event.info.name, (...args) =>
        event.run(...args, client)
    );
});

client.login(process.env.CLIENT_TOKEN);
