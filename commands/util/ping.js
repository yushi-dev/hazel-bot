module.exports.info = {
    name: "ping",
    aliases: ["ms", "lag"],
};

module.exports.run = ({ msg }) => {
    msg.channel.send(`ping is around \`${Date.now() - msg.createdTimestamp}\` ms!`);;
};
