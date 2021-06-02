exports.info = {
    name: "clear",
    aliases: ["rm"],
    description: "removes a specified amount of messages",
    usage: "<number>",
    permissions: ["MANAGE_MESSAGES", "KICK_MEMBERS"],
};

exports.run = ({ msg, args }) => {
    if (isNaN(args[0]) || args[0] === 0) {
        msg.channel.send("error, argument must be a number!");

        return;
    }

    if (args[0] > 250) {
        msg.channel.send("can't exceed 250 limit");

        return;
    }

    msg.delete().then(() => {
        msg.channel.bulkDelete(args[0]).then(() => {
            msg.channel
                .send(`ta-da, i've deleted \`${args[0]}\` messages!`)
                .then((msg) => {
                    msg.delete({ timeout: 5000 });
                });
        });
    });
};
