const { Client, Collection } = require("discord.js");
const fs = require("fs");

const client = new Client();

require("dotenv").config();

["commands", "alias"].forEach((item) => (client[item] = new Collection()));

for (const folder of fs.readdirSync("./commands")) {
    for (const file of fs.readdirSync(`./commands/${folder}`)) {
        const cmd = require(`./commands/${folder}/${file}`);
        client.commands.set(cmd.name, cmd);
    }
}

for (const file of fs.readdirSync("./events")) {
    require(`./events/${file}`)(client);
}

client.login(process.env.CLIENT_TOKEN);
