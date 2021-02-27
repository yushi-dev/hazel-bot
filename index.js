const { Client, Collection } = require("discord.js");
const Util = require("./util/functions");

require("dotenv").config();

const client = new Client();

client.commands = new Collection();
client.alias = new Collection();

for (const command of Util.scanFolderForFiles("./commands", ".js")) {
    const cmd = require(command);
    client.commands.set(cmd.info.name, cmd);
}

for (const event of Util.scanFolderForFiles("./events", ".js")) {
    require(event)(client);
}

client.login(process.env.CLIENT_TOKEN);
