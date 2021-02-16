module.exports = {
    name: "clear",
    aliases: ["rm"],
    permissions: ["MANAGE_MESSAGES"],
    run({ msg, args }) {
        if (isNaN(args[0])) {
            msg.channel.send("argument must be a number");

            return;
        }

        if (args[0] > 250) {
            msg.channel.send("can't exceed 250 limit");

            return;
        }

        msg.channel.bulkDelete(args[0]).then(() => {
            msg.channel.send(`ta-da, deleted ${args[0]} messages`).then(msg => msg.delete(3000));
        });
    }
}