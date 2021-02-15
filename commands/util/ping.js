module.exports = {
    name: "ping",
    aliases: ["ms", "lag"],
    description: "pong",
    run({ msg }) {
        msg.channel.send(`ping is around \`${Date.now() - msg.createdTimestamp}\` ms!`);
    },
};
