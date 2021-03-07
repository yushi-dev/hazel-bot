const Discord = require("discord.js");
const Util = require("./util/functions");
const path = require("path");

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
    const ifOnce = event.info ? event.info.once : false;

    client[ifOnce ? "once" : "on"](path.basename(file, ".js"), (...args) =>
        event.run(...args, client)
    );
});

client.login(process.env.CLIENT_TOKEN);
