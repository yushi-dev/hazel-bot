const { Client, Collection } = require("discord.js");
const Util = require("./util/functions");

require("dotenv").config();

const client = new Client();

client.commands = new Collection();
client.alias = new Collection();

Util.getFiles("./commands", ".js").forEach(file => {
    const cmd = require(file);
    client.commands.set(cmd.name, cmd);
});

Util.getFiles("./events", ".js").forEach(file => require(file)(client));

client.login(process.env.CLIENT_TOKEN);
