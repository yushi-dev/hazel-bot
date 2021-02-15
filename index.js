const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");

const client = new Client();

require("dotenv").config();

["commands", "alias"].forEach((item) => (client[item] = new Collection()));

for (const folder of readdirSync("./commands")) {
    for (const file of readdirSync(`./commands/${folder}`)) {
        const cmd = require(`./commands/${folder}/${file}`);
        client.commands.set(cmd.name, cmd);
    }
}

readdirSync("./events").forEach(file => require(`./events/${file}`)(client));

client.login(process.env.CLIENT_TOKEN);
