module.exports = {
    name: "clear",
    aliases: ["rm"],
    permissions: ["MANAGE_MESSAGES", "KICK_MEMBERS"],
    run({ msg, args }) {
        if (isNaN(args[0])) {
            msg.channel.send("argument must be a number");

            return;
        }

        if (args[0] > 250) {
            msg.channel.send("can't exceed 250 limit");

            return;
        }

        msg.delete();

        msg.channel.bulkDelete(args[0]).then(() => {
            msg.channel.send(`ta-da, i've deleted \`${args[0]}\` messages!`);
        });
    }
};